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

const Home = () => {
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
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
      img: "https://a.allegroimg.com/s80/127d5a/b7255ce34174bdd079b18e1ce521",
      name: "Collect Coins",
    },
  ];
  const sliderRef = React.useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  // if (!loggedIn) {
  //   return <Navigate to="/signin" />;
  // }
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:8080/products");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      <Box>
        <Image
          src={displayData[0].img}
          alt="slide"
        />
        <Text>{displayData[0].name}</Text>
      </Box>
    </Box>
  );
};

export default Home;
