import { Box, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Home = () => {
  const { loggedIn } = useContext(AuthContext);
//   const navigateTo = useNavigate();
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/allegroData", {
      withCredentials: true,
    });
    console.log(response);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(loggedIn);

  if (!loggedIn) {
    return <Navigate to="/signin" />;
  }
  return (
    <Box backgroundColor={"#ECEFF1"}>
      <Heading>Home</Heading>
    </Box>
  );
};

export default Home;
