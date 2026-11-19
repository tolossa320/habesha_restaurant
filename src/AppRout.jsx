import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import Signin from "./pages/Auth/Signin";
import Cart from "./pages/cart/Cart";
import Order from "./pages/order/Order";
import Payment from "./pages/Payment/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51TRrDLI6BUIYIAAjcQXlU9dlMfPj3S7xAb77vW1iQ093BEdcgLnRvpwbeHfCcO6YP2qt3qy6Rhtqins3O9j4b57T00awVkvUJI",
);
import ProtectedRoute from "./Components/protectedRout/ProtectedRoute";
function AppRout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="order"
          element={
            <ProtectedRoute msg={"Please sign in to view your order"} redirect={"/order"}>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"Please sign in to proceed to payment"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRout;
