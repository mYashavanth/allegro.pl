import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import Loading from "./Loading";

const Cart = () => {
  const { loggedIn, setLoggedIn, products, setProducts, totalAmountToPay , setTotalAmountToPay} =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();

  useEffect(() => {
    fetchCartData();
  }, []);
  async function fetchCartData() {
    try {
      setLoading(true);
      const res = await axios.get("https://dull-colt-gear.cyclic.app/carts", {
        withCredentials: true,
      });
      // console.log(res.data);
      setProducts(res.data);
      if (res.status == 200) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function deleteData(id) {
    try {
      setLoading(true);
      await axios.delete(`https://dull-colt-gear.cyclic.app/carts/delete/${id}`, {
        withCredentials: true,
      });
      fetchCartData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function addData(id) {
    try {
      setLoading(true);
      const res = await axios.post(
        `https://dull-colt-gear.cyclic.app/carts/add/${id}`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res);
      fetchCartData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function removeData(id) {
    try {
      setLoading(true);
      const res = await axios.delete(
        `https://dull-colt-gear.cyclic.app/carts/deleteMany/${id}`,
        {
          withCredentials: true,
        }
      );
      console.log(res);
      fetchCartData();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  const productCout = {};
  products.forEach((product) => {
    if (productCout[product.productId]) {
      productCout[product.productId] += 1;
    } else {
      productCout[product.productId] = 1;
    }
  });
  const dataToDisplay = [];
  for (let product in productCout) {
    console.log(product);
    let data = products.find((item) => item.productId === product);
    console.log(data);
    dataToDisplay.push({ ...data, count: productCout[product] });
  }
  console.log(dataToDisplay);
  console.log(productCout);
  console.log({ length: products.length });
  if (!loggedIn) {
    return <Navigate to="/signin" />;
  }
  console.log(products);
  const totalAmount = products.reduce((acc, item) => {
    console.log(item.price);
    console.log(acc);
    return acc + +item.price * 0.049;
  }, 0);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {products.length > 0 ? (
        <Box display={"flex"} gap={"1rem"} bgColor={"#ECEFF1"} p={"1rem"}>
          <Box w={"70%"} display={"flex"} flexDirection={"column"} gap={"1rem"}>
            {dataToDisplay.map((item) => {
              return (
                <Box
                  key={item._id}
                  display={"flex"}
                  gap={"1rem"}
                  p={"1rem"}
                  bgColor={"white"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  {/* <img src={item.image} alt={item.name} /> */}
                  <Image src={item.image} alt={item.name} w={"8rem"} />
                  <Text fontSize={"1.3rem"}>{item.name}</Text>
                  <Box display={"flex"} gap={"1rem"}>
                    <Button onClick={() => deleteData(item._id)}>
                      <FiMinus />
                    </Button>
                    <Text fontSize={"1.3rem"}>{item.count}</Text>
                    <Button onClick={() => addData(item.productId)}>
                      <FiPlus />
                    </Button>
                  </Box>
                  <Text fontSize={"1.3rem"}>
                    {(item.price * item.count * 0.049).toFixed(2)}{" "}
                    <span style={{ color: "teal", fontSize: "1em" }}>PLN</span>
                  </Text>
                  <Button onClick={() => removeData(item.productId)}>
                    <IoTrashOutline size={24} />
                  </Button>
                </Box>
              );
            })}
          </Box>
          <Box
            w={"30%"}
            display={"flex"}
            flexDirection={"column"}
            bgColor={"white"}
            p={"1rem"}
            // border={"1px solid gray"}
            h={"20rem"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"1rem"}
              p={"1rem"}
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                <Text fontSize={"1.3rem"}>Value of Products</Text>
                <Text fontSize={"1.3rem"}> {totalAmount.toFixed(2)} PLN</Text>
              </Box>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Text>Delivery from</Text>
                <Text>8,99 PLN</Text>
              </Box>
              <hr />
              <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                <Box display={"flex"} justifyContent={"space-between"}>
                  <Text fontSize={"1.3rem"}>Including delivery</Text>
                  <Text fontSize={"1.5rem"}>
                    {" "}
                    {(+totalAmount + 8.99).toFixed(2)}{" "}
                    <span style={{ color: "teal", fontSize: "0.8em" }}>
                      PLN
                    </span>
                  </Text>
                </Box>
                <Button
                  colorScheme="orange"
                  backgroundColor={"#FF5A00"}
                  borderRadius={"none"}
                  w={"100%"}
                  onClick={() => {
                    navigateTo("/payments");
                    setTotalAmountToPay(totalAmount + 8.99);
                    window.scrollTo(0, 0);
                  }}
                >
                  DELIVERY AND PAYMENT
                </Button>
                <Text
                  onClick={() => {
                    navigateTo("/");
                    window.scrollTo(0, 0);
                  }}
                  color={"teal"}
                  cursor={"pointer"}
                  textAlign={"center"}
                  _hover={{ color: "teal.300" }}
                >
                  CONTINUE SHOPPING
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box bgColor={"#ECEFF1"} p={"1rem"}>
          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            w={{ base: "100%", md: "100%", lg: "80%", xl: "70%" }}
            m={"auto"}
            gap={"1rem"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={"1rem"}
              p={"1rem"}
              justifyContent={"center"}
              alignItems={"flex-start"}
              w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}
              color={"#8494A2"}
            >
              <Heading size={"lg"}>Your shopping cart is empty</Heading>
              <Text fontSize={"0.9rem"}>
                Add items to your cart and buy them quickly and conveniently.
                Via the shopping cart, you can purchase up to 50 items from
                different sellers at once.
              </Text>
            </Box>
            <Box w={{ base: "100%", md: "100%", lg: "50%", xl: "50%" }}>
              <Image
                src="https://a.allegroimg.com/original/128979/cffc85574887bd8fa916acaabaf8"
                alt="empty cart"
                width={"100%"}
              />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Cart;
