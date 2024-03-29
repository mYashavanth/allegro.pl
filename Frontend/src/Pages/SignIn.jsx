import {
  Box,
  Button,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import Loading from "./Loading";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const navigateTo = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    try {
      setLoading(true);
      const response = await axios.post(
        "https://dull-colt-gear.cyclic.app/users/login",
        userDetails,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      if (response.status === 200) {
        setLoggedIn(true);
        navigateTo("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loggedIn) {
    return <Navigate to="/cart" />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Box backgroundColor={"#ECEFF1"}>
        <Box
          width={{ base: "90%", md: "90%", lg: "40%", xl: "40%" }}
          m={"auto"}
          p={5}
        >
          <Text fontSize={"3xl"}>Log in</Text>
          <Box backgroundColor={"white"} padding={"1rem"}>
            <form onSubmit={handleSubmit}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                gap={"2rem"}
                m={"1rem 0"}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  borderRadius={"none"}
                  onChange={handleChange}
                />

                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    // type="password"
                    name="password"
                    placeholder="Password"
                    borderRadius={"none"}
                    onChange={handleChange}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>

              <Box display={"flex"} justifyContent={"flex-end"}>
                <Button
                  type="submit"
                  colorScheme="orange"
                  backgroundColor={"#FF5A00"}
                  borderRadius={"none"}
                  w={{ base: "80%", md: "70%", lg: "60%", xl: "55%" }}
                >
                  LOG IN
                </Button>
              </Box>
              <Button
                w={"100%"}
                m={"1rem 0"}
                backgroundColor={"white"}
                border={"1px solid gray"}
                borderRadius={"none"}
              >
                <Image
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  alt="google"
                  w={"1.5rem"}
                  position={"relative"}
                  left={{
                    base: "-1rem",
                    md: "-11rem",
                    lg: "-8.5rem",
                  }}
                />
                CONTINUE WITH GOOGLE
              </Button>
              <Button
                w={"100%"}
                m={"0.5rem 0"}
                backgroundColor={"white"}
                border={"1px solid gray"}
                borderRadius={"none"}
              >
                <Image
                  src="https://img.icons8.com/color/48/000000/facebook-new.png"
                  alt="google"
                  w={"1.5rem"}
                  position={"relative"}
                  left={{
                    base: "-0.4rem",
                    md: "-10.5rem",
                    lg: "-8rem",
                  }}
                />
                CONTINUE WITH FACEBOOK
              </Button>
            </form>
          </Box>
          <Box bgColor={"white"} mt={"1rem"} p={"1rem"} borderRadius={"none"}>
            <Text>
              <b>First time on Allegro?</b>{" "}
              <Link
                to="/signup"
                style={{ color: "teal" }}
              >
                CREATE AN ACCOUNT
              </Link>
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
