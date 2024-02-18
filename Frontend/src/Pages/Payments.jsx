import { Box, Button, Heading, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const Payments = () => {
  const { products } = useContext(AuthContext);
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
  const handleSubmit = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.alert("Payment Successful");
    console.log(formData);
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
            <Input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              required
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
            />
            <Input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Address"
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="city"
              value={formData.city}
              placeholder="City"
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="state"
              value={formData.state}
              placeholder="State"
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="country"
              value={formData.country}
              placeholder="Country"
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="pincode"
              value={formData.pincode}
              placeholder="Pincode"
              onChange={handleChange}
              required
            />
            <Box>
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
              />
              <Input
                type="text"
                name="cardName"
                placeholder="Name"
                onChange={handleChange}
                onFocus={handleInputFocus}
                value={formData.cardName}
                required
              />
              <Input
                type="text"
                name="expiry"
                placeholder="Expiry"
                onChange={handleChange}
                onFocus={handleInputFocus}
                value={formData.expiry}
                required
              />
              <Input
                type="number"
                name="cvc"
                placeholder="CVC"
                onChange={handleChange}
                onFocus={handleInputFocus}
                value={formData.cvc}
                required
              />
            </Box>
            <Button type="submit">Submit</Button>
          </Box>
        </form>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Payments;
