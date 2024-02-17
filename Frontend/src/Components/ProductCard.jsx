import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ data }) {
  console.log({ data });
  const navigateTo = useNavigate();

  return (
    <Box
      //   border={"1px solid gray"}
      p={"1rem"}
      width={"15rem"}
      bgColor={"white"}
      onClick={() => {
        navigateTo(`/singleproduct/${data?._id}`);
        window.scrollTo(0, 0);

      }}
    >
      <Image src={data?.image} alt={data?.name} width={"15rem"} />
      <Heading color={"#3A4E58"}>
        <span style={{ fontSize: "1.8rem" }}>PLN</span>{" "}
        {(data?.price * 0.049).toFixed(2)}
      </Heading>
      <Text>{data?.name.toUpperCase()}</Text>
      <Text fontSize={"0.9rem"} color={"gray"}>
        {data?.shipping}
      </Text>
      <Text fontSize={"0.9rem"} color={"gray"}>
        Stars: {data?.star}
      </Text>
    </Box>
  );
}
