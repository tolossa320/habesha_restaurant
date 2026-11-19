import React, { useContext, useState } from "react";
import Layout from "../../Components/layout/Layout";
import styles from "./styles.module.css";
import { DataContext } from "../../Components/dataProvider/DataProvider";
import MenuCard from "../../Components/menu/MenuCard";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { axiosInstance } from "../../../API/Axios";
import { db } from "../../utility/Firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { Type } from "../../utility/ActionTypes";
function Payment() {
  const [{ basket, user }, dipatch] = useContext(DataContext);
  const total =
    basket?.reduce((amount, item) => amount + Number(item.price), 0) || 0;
  const totalItems = basket?.length;
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [cardError, setCardError] = useState(null);

  const [processing, setProcessing] = useState(false);

  const handleChange = (e) => {
    if (e.error) {
      setCardError(e.error.message);
    } else {
      setCardError(null);
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !user?.uid) {
      setCardError("Please sign in and wait for Stripe to load.");
      return;
    }

    try {
      setProcessing(true);
      setCardError(null);

      // Create payment intent
      const response = await axiosInstance.post(
        `/payments/create?total=${Math.round(total * 100)}`,
      );
      const clientSecret = response.data?.client_secret;
      if (!clientSecret) {
        throw new Error("Client secret not found.");
      }
      // Confirm Stripe payment
      const confirmation = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: user.email,
          },
        },
      });
      if (confirmation.error) {
        throw new Error(confirmation.error.message);
      }
      const paymentIntent = confirmation.paymentIntent;
      if (paymentIntent?.status === "succeeded") {
        // Save order to Firestore
        await setDoc(doc(db, "users", user.uid, "orders", paymentIntent.id), {
          basket: basket,
          amount: paymentIntent.amount,
          currency: paymentIntent.currency,
          paymentId: paymentIntent.id,
          created: serverTimestamp(),
        });

        //empty basket
      } else {
        throw new Error("Payment was not successful.");
      }
    } catch (error) {
      console.error("Payment failed:", error);
      console.error("Error details:", error.message);

      setCardError(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong.",
      );
    } finally {
      setProcessing(false);
    }
    // Step 4: Empty basket after successful payment
    dipatch({
      type: Type.EMPTY_BASKET,
    });

    navigate("/order", {
      state: { msg: "your order has been placed successfully" },
    });
  };

  return (
    <Layout>
      {/* header */}
      <div className={styles.Payment_header}>Checkout ({totalItems}) items</div>
      {/* payment method */}
      <section className={styles.Payment}>
        {/* address */}
        <div className={styles.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Bole, Ethiopia</div>
          </div>
        </div>

        <hr />
        {/* products */}
        <div>
          <h3>Review items and delivery</h3>

          <div>
            {basket?.map((item, i) => (
              <MenuCard key={i} data={item} />
            ))}
          </div>
        </div>
        <hr />
        {/* card form */}
        <div className={styles.flex}>
          <h3>Payment Method</h3>
          <div className={styles.card_form}>
            <form onSubmit={handlePayment}>
              <label className={styles.card_label}>Credit or Debit Card</label>

              {cardError && (
                <small className={styles.card_error}>{cardError}</small>
              )}
              <CardElement onChange={handleChange} />
              <div>
                <span className={styles.total}>Order Total: ${total}</span>
              </div>
              <div>
                <button type="submit" className={styles.payment_btn}>
                  {processing ? (
                    <div className={styles.processing}>
                      <ClipLoader color="#fff" size={20} />
                      <p>please wait...</p>
                    </div>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </div>
              <p className={styles.secure_message}>
                Your payment information is securely processed by Stripe.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment;
