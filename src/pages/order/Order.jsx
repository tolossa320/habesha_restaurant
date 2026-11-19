import React, { useContext, useState, useEffect } from "react";
import styles from "./styles.module.css";
import Layout from "../../Components/layout/Layout";
import { db } from "../../utility/Firebase";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

import { DataContext } from "../../Components/dataProvider/DataProvider";
import MenuCard from "../../Components/menu/MenuCard";

function Order() {
  const [{ user }] = useContext(DataContext);

  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!user?.uid) {
      setOrder([]);
      setLoading(false);
      return;
    }
    // Get the current user's orders
    const orderRef = collection(db, "users", user.uid, "orders");
    // Sort orders by creation date
    const orderQuery = query(orderRef, orderBy("created", "desc"));
    // Listen for real-time updates
    const unsubscribe = onSnapshot(
      orderQuery,
      (snapshot) => {
       
        const orders = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // console.log("User UID:", user.uid);
        // console.log("Number of orders:", snapshot.size);
        // console.log("User orders:", orders);
        setOrder(orders);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching orders:", error);
        setLoading(false);
      },
    );

    // Clean up listener
    return () => unsubscribe();
  }, [user?.uid]);

  return (
    <Layout>
      <section className={styles.container}>
        <div className={styles.order_Container}>
          <h2>Your Orders</h2>

          {loading ? (
            <p>Loading your orders...</p>
          ) : order.length === 0 ? (
            <p>You have no orders yet.</p>
          ) : (
            order.map((eachOrder) => (
              <div key={eachOrder.id} className={styles.orderItem}>
                <p>Order ID: {eachOrder.id}</p>
                <p>Payment ID: {eachOrder.paymentId}</p>
                <p>Total: ${(eachOrder.amount / 100).toFixed(2)}</p>
                {eachOrder.basket?.map((orderItem, index) => (
                  <MenuCard key={index} data={orderItem} renderAdd={false} />
                ))}
              </div>
            ))
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Order;
