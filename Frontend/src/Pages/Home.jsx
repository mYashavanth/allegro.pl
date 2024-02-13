import { Box, Heading, Button, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Slider from "react-slick";

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

  const sliderRef = React.useRef(null);

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevious = () => {
    sliderRef.current.slickPrev();
  };

  if (!loggedIn) {
    return <Navigate to="/signin" />;
  }
  return (
    <Box backgroundColor={"#ECEFF1"}>
      <Heading>Home</Heading>
      <Box
        w={"95%"}
        m={"auto"}
        mt={10}
        position="relative"
        border={"1px solid red"}
        // aspectRatio={"3/2"}
      >
        <Slider ref={sliderRef} {...settings}>
          {/* Repeat this for each image */}
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
          {/* <Box>
            <Image src="https://via.placeholder.com/800x400" alt="slide" />
          </Box>
          <Box>
            <Image src="https://via.placeholder.com/800x400" alt="slide" />
          </Box> */}
        </Slider>
        <Button
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          onClick={goToPrevious}
        >
          Previous
        </Button>
        <Button
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          onClick={goToNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
