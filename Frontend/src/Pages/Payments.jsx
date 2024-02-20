import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import axios from "axios";

const Payments = () => {
  const { products, setProducts,totalAmountToPay, setTotalAmountToPay } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    number: "",
    expiry: "",
    cvc: "",
    cardName: "",
    focus: "",
  });
  const DeleteAllData = async () => {
    try {
      const res = await axios.delete(
        "https://dull-colt-gear.cyclic.app/carts/deleteAll",
        {
          withCredentials: true,
        }
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.alert("Payment Successful");
    const data = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      country: formData.country,
      pincode: formData.pincode,
      products: products,
      totalAmountToPay: totalAmountToPay+"PLN"
    };
    console.log(data);
    DeleteAllData();

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      number: "",
      expiry: "",
      cvc: "",
      cardName: "",
      focus: "",
    });
    setProducts([]);
    setTotalAmountToPay(0);
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleInputFocus = (e) => {
    setFormData((prev) => ({ ...prev, focus: e.target.name }));
  };
  return (
    <Box>
      <Box>
        <form onSubmit={handleSubmit}>
          <Box
            width={"40%"}
            m={"auto"}
            p={"1rem"}
            display={"flex"}
            gap={"1rem"}
            flexDirection={"column"}
          >
            <Heading fontSize={"1.5rem"}>Details</Heading>
            <Input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              required
              border={"1px solid black"}
              borderRadius={"none"}
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              required
              border={"1px solid black"}
              borderRadius={"none"}
            />
            <Input
              type="number"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              name="phone"
              value={formData.phone}
              placeholder="Phone"
              onChange={handleChange}
              max={"9999999999"}
              required
              border={"1px solid black"}
              borderRadius={"none"}
            />
            <Input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
              required
              border={"1px solid black"}
              borderRadius={"none"}
            />
            <Input
              type="text"
              name="city"
              value={formData.city}
              placeholder="City"
              onChange={handleChange}
              required
              border={"1px solid black"}
              borderRadius={"none"}
            />
            <Input
              type="text"
              name="state"
              value={formData.state}
              placeholder="State"
              onChange={handleChange}
              required
              border={"1px solid black"}
              borderRadius={"none"}
            />
            <Input
              type="text"
              name="country"
              value={formData.country}
              placeholder="Country"
              onChange={handleChange}
              required
              border={"1px solid black"}
              borderRadius={"none"}
            />
            <Input
              type="text"
              name="pincode"
              value={formData.pincode}
              placeholder="Pincode"
              onChange={handleChange}
              required
              border={"1px solid black"}
              borderRadius={"none"}
            />
            <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
              <Heading fontSize={"1.5rem"}>Payment</Heading>
              <Cards
                number={formData.number}
                name={formData.cardName}
                expiry={formData.expiry}
                cvc={formData.cvc}
                focused={formData.focus}
              />
              <Input
                type="number"
                name="number"
                placeholder="Card Number"
                onChange={handleChange}
                onFocus={handleInputFocus}
                value={formData.number}
                required
                border={"1px solid black"}
                borderRadius={"none"}
              />
              <Input
                type="text"
                name="cardName"
                placeholder="Name"
                onChange={handleChange}
                onFocus={handleInputFocus}
                value={formData.cardName}
                required
                border={"1px solid black"}
                borderRadius={"none"}
              />
              <Input
                type="text"
                name="expiry"
                placeholder="Expiry"
                onChange={handleChange}
                onFocus={handleInputFocus}
                value={formData.expiry}
                required
                border={"1px solid black"}
                borderRadius={"none"}
              />
              <Input
                type="number"
                name="cvc"
                placeholder="CVC"
                onChange={handleChange}
                onFocus={handleInputFocus}
                value={formData.cvc}
                required
                border={"1px solid black"}
                borderRadius={"none"}
              />
            </Box>
            <Button
              type="submit"
              colorScheme="orange"
              backgroundColor={"#FF5A00"}
              borderRadius={"none"}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Payments;
