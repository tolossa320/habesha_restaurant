import React, { useContext } from "react";
import styles from "./MenuSection.module.css";
import { DataContext } from "../dataProvider/DataProvider";
import { Type } from "../../utility/ActionTypes";

function MenuCard({ data, renderAdd }) {
  const [state, dispatch] = useContext(DataContext);
  const AddToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        name: data.name,
        price: data.price,
        description: data.description,
        image: data.image,
        tag: data.tag,
      },
    });
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <img src={data.image} alt={data.name} />
          {data.tag && <span className={styles.tag}>{data.tag}</span>}
        </div>
        <div className={styles.cardBody}>
          <div className={styles.cardTitleRow}>
            <h3>{data.name}</h3>
            <span className={styles.price}>${data.price.toFixed(2)}</span>
          </div>
          <p>{data.description}</p>
          {renderAdd && (
            <button
              type="button"
              className={styles.addButton}
              onClick={AddToCart}
            >
              Add to order
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
