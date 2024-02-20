import { Box, Heading } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductCard from "../Components/ProductCard";

export default function SearchData() {
  const { searchData } = useContext(AuthContext);

  const categories = [];
  searchData.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  console.log({ categories });
  console.log({ search: searchData.length });

  return (
    <>
      {searchData.length === 0 ? (
        <Box
          bgColor={"#ECEFF1"}
          p={"1rem"}
          h={"70vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Heading textAlign={"center"}>No Data Found</Heading>
        </Box>
      ) : (
        <Box bgColor={"#ECEFF1"} p={"1rem"}>
          <Heading>SearchData</Heading>
          {categories.map((item) => {
            return (
              <Box>
                <Heading>{item}</Heading>
                <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"} p={"1rem"}>
                  {searchData.map((data) => {
                    if (data.category === item) {
                      return <ProductCard key={data?._id} data={data} />;
                    }
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </>
  );
}
