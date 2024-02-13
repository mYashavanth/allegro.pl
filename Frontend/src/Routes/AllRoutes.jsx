import React from "react";

import { Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Cart from "../Pages/Cart";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
        </Routes>
    );
}

export default AllRoutes