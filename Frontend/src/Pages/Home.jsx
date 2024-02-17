import { Box, Heading, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Slider from "react-slick";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../Components/ProductCard";

const Home = () => {
  const { loggedIn, setLoggedIn, setProductData, productData } =
    useContext(AuthContext);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const displayData = [
    {
      img: "https://a.allegroimg.com/s80/125883/6f2f3aea4b1599cc47dc3529d8b8",
      name: "Collect Coins",
    },
    {
      img: "https://a.allegroimg.com/s80/125d0c/2802cf844384bed29ceabd700bed",
      name: "Take it in installments. APR 0%",
    },
    {
      img: "https://a.allegroimg.com/s80/121370/da2ab85f4f56a3160c99f513cc70",
      name: "Supermarket",
    },
    {
      img: "https://a.allegroimg.com/s80/12a0d1/05486c9c40e597c8ce02c809ca9b",
      name: "Automotive",
    },
    {
      img: "https://a.allegroimg.com/s80/12a47c/ab0db0ee40ec90009fe06ec93a6d",
      name: "House and garden",
    },
    {
      img: "https://a.allegroimg.com/s80/12797e/cafe7e6a4ee8a97ce59663e35ecd",
      name: "Electronics",
    },
    {
      img: "https://a.allegroimg.com/s80/125cc1/8841090c480e8bbe5d3ef7f72e54",
      name: "Sports and tourism",
    },
    {
      img: "https://a.allegroimg.com/s80/127880/dbb6d88e45b382089288d9e606c9",
      name: "Fashion",
    },
    {
      img: "https://a.allegroimg.com/s80/128b90/e7ffda3a4901b4a061559688e4da",
      name: "Beauty",
    },
    {
      img: "https://a.allegroimg.com/s80/12c3b6/c3941ca14ed19ae631f925cdc1b3",
      name: "Kid",
    },
    {
      img: "https://a.allegroimg.com/s80/12fee5/90d87f494c759568e62fd75a2558",
      name: "Collections and art",
    },
  ];
  const sliderRef = React.useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };
  const categories = [];
  productData.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });
  console.log(categories);

  // if (!loggedIn) {
  //   return <Navigate to="/signin" />;
  // }
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/products");
      // console.log(response);
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(productData);

  return (
    <Box backgroundColor={"#ECEFF1"} p={"1rem"}>
      <Box
        w={"95%"}
        m={"auto"}
        mt={10}
        position="relative"
        height={"380px"}
        backgroundColor={"white"}
        p={"0.5rem"}
      >
        <Slider ref={sliderRef} {...settings}>
          <Box>
            <Image
              src="https://a.allegroimg.com/original/12ef07/6ee08fb645398f5cb2caa5c1729a"
              alt="slide"
            />
          </Box>
          <Box>
            <Image
              src="https://a.allegroimg.com/original/12886a/b3ec5f5b4e4597b4c4f6116fb8fc"
              alt="slide"
            />
          </Box>
          <Box>
            <Image
              src="https://a.allegroimg.com/original/0ae3f8/d64680d3432bb63a52e67bac3eba"
              alt="slide"
            />
          </Box>
        </Slider>
        <Button
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          onClick={goToPrevious}
        >
          <MdArrowBackIos />
        </Button>
        <Button
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          onClick={goToNext}
        >
          <MdArrowForwardIos />
        </Button>
      </Box>
      {/* <Box>
        <Image src={displayData[0].img} alt="slide" />
        <Text>{displayData[0].name}</Text>
      </Box> */}
      <Box
        display={"flex"}
        gap={"1rem"}
        // border={"1px solid black"}
        p={"1rem"}
        w={"95%"}
        m={"auto"}
        mt={10}
        bgColor={"white"}
      >
        {displayData.map((item) => {
          return (
            <Box width={"8%"} p={"0.5rem"} key={item.name} textAlign={"center"}>
              <Image src={item.img} alt="slide" m={"auto"} />
              <Text>{item.name}</Text>
            </Box>
          );
        })}
      </Box>
      <Box w={"95%"} m={"auto"} mt={10}>
        {/* {productData.map((item) => {
          console.log({ item });
          return <ProductCard key={item.id} data={item} />;
        })} */}
        {categories.map((item) => {
          return (
            <Box>
              <Heading>{item}</Heading>
              <Box display={"flex"} flexWrap={"wrap"} gap={"1rem"} p={"1rem"}>
                {productData.map((data) => {
                  if (data.category === item) {
                    return <ProductCard key={data._id} data={data} />;
                  }
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Home;
