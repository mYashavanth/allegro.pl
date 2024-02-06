import React from "react";

import { Routes, Route } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
        </Routes>
    );
}

export default AllRoutes