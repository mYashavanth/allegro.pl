import React, { useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    fetchCartData();
  }, []);
  async function fetchCartData() {
    try {
      const res = await axios.get("http://localhost:8080/carts", {
        withCredentials: true,
      });
      console.log(res.data);
      if (res.status == 200) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  if (!loggedIn) {
    return <Navigate to="/signin" />;
  }
  return <div>Cart</div>;
};

export default Cart;
