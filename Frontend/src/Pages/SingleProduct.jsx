import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export default function SingleProduct() {
  const navigateTo = useNavigate();
  const { _id } = useParams();
  const { productData, loggedIn } = useContext(AuthContext);
  console.log({ _id });
  let data = productData.find((item) => item._id === _id);
  console.log({data});
  async function addToCart(id) {
    try {
      const res = await axios.post(
        `http://localhost:8080/carts/add/${id}`,{},
        { withCredentials: true }
      );
      console.log({res});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box bgColor={"#ECEFF1"} p={"1rem"}>
      <Box bgColor={"white"} p={"1rem"} width={"60%"} m={"auto"}>
        <Box
          display={"flex"}
          flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        >
          <Box width={{ base: "100%", md: "100%", lg: "60%", xl: "60%" }}>
            <Image src={data?.image} alt={data?.name} m={"auto"} />
          </Box>
          <Box
            width={{ base: "100%", md: "100%", lg: "40%", xl: "40%" }}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box>
              <Heading>{data?.name}</Heading>
              <Box
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
                gap={"1.5rem"}
              >
                <Text>
                  {data?.star}
                  <span style={{ color: "yellow", fontSize: "1.3em" }}>
                    &#9733;
                  </span>
                </Text>
                <Text color={"teal"}>1,807 ratings and 287 reviews</Text>
              </Box>
              <Heading color={"#3A4E58"}>
                <span style={{ fontSize: "1.8rem" }}>PLN</span>{" "}
                {(data?.price * 0.049).toFixed(2)}
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur tenetur ea sapiente iure eum similique nostrum
                voluptatibus odio excepturi quas asperiores aliquam error nemo
                eveniet hic at culpa, nobis tempore!
              </Text>
            </Box>
            <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
              <Button
                colorScheme="orange"
                backgroundColor={"#FF5A00"}
                borderRadius={"none"}
                onClick={()=> loggedIn?addToCart (data?._id):navigateTo("/signin")} 
              >
                ADD TO CART
              </Button>
              <Button
                colorScheme="orange"
                backgroundColor={"#FF5A00"}
                borderRadius={"none"}
              >
                BUY AND PAY
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
