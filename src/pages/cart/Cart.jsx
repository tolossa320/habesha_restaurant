import React from "react";
import cart from "./cart.module.css";
import Layout from "../../Components/layout/Layout";
import { useContext } from "react";
import { DataContext } from "../../Components/dataProvider/DataProvider";
import MenuCard from "../../Components/menu/MenuCard";
import { Link } from "react-router-dom";
function Cart() {
  const [{ basket, user }, dipatch] = useContext(DataContext);
  const total = basket?.reduce((amount, item) => amount + item.price, 0);
  return (
    <Layout>
      <section className={cart.card}>
        <div className={cart.imageWrap}>
          <div>
            <h2>Helo</h2>
            <h3>Your shopping basket</h3>
            <hr />
            {basket?.length === 0 ? (
              <p>Oops! No items in your cart.</p>
            ) : (
              basket.map((item, id) => {
                return <MenuCard key={id} renderAdd={false} data={item} />;
              })
            )}
          </div>
          <div className={cart.subtotal}>
            <div>
              {basket?.length !== 0 && (
                <div>
                  <p>Subtotal ({basket?.length} items):</p>
                  <h3>${total.toFixed(2)}</h3>
                  <span>
                    <input type="checkbox" />
                    <span>This order contain a gift</span>
                  </span>
                  <Link to="/payment">continue to checkout</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Cart;
