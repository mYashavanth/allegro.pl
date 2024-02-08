import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const [userDetails, setUserDetails] = useState({
    userName: "",
    email: "",
    password: "",
    mobileNumber: "",
  });
  const [formChangeFlag, setFormChangeFlag] = useState(false);
  const [otp, setOtp] = useState({
    userOtp: "",
  });
  const navigateTo = useNavigate();

  const handleClick = () => setShow(!show);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value,
    }));
  };

  const [checkboxes, setCheckboxes] = useState({
    privacyPolicy: false,
    termsAndConditions: false,
    accept: false,
    selectAll: false,
  });

  const handleSelectAll = () => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      selectAll: !prevCheckboxes.selectAll,
      privacyPolicy: !prevCheckboxes.selectAll,
      termsAndConditions: !prevCheckboxes.selectAll,
      accept: !prevCheckboxes.selectAll,
    }));
  };
  const fetchData = async () => {
    const response = await axios.post(
      "http://localhost:8080/users/signup",
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
      setFormChangeFlag(true);
    }
    if(response.data.error === "User already exists"){
      alert("User already exists");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    fetchData();
  };

  const handleCheckboxChange = (name) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !prevCheckboxes[name],
    }));
  };

  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setOtp((prevOtp) => ({
      ...prevOtp,
      [name]: value,
    }));
  };
  const fetchOtpData = async () => {
    const response = await axios.post(
      "http://localhost:8080/users/verify",
      otp,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );
    console.log(response);
    if (response.status === 200) {
      navigateTo("/signin");
    }
  }
  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    fetchOtpData();
  };

  return (
    <>
      <Box backgroundColor={"#ECEFF1"}>
        <Box
          width={{ base: "90%", md: "90%", lg: "40%", xl: "40%" }}
          m={"auto"}
          p={5}
        >
          <Text fontSize={"3xl"}>Create an Account</Text>
          <Box backgroundColor={"white"} padding={"1rem"}>
            <Text fontWeight={"bold"}>1. Registration details</Text>
            {formChangeFlag ? (
              <form onSubmit={handleOtpSubmit}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"1rem"}
                  m={"1rem 0"}
                >
                  <Input
                    type="number"
                    name="userOtp"
                    placeholder="Please Enter Your Otp"
                    borderRadius={"none"}
                    onChange={handleOtpChange}
                  />
                  <Box display={"flex"} justifyContent={"flex-end"}>
                    <Button
                      type="submit"
                      colorScheme="orange"
                      backgroundColor={"#FF5A00"}
                      borderRadius={"none"}
                      w={{ base: "80%", md: "70%", lg: "60%", xl: "55%" }}
                    >
                      CREATE AN ACCOUNT
                    </Button>
                  </Box>
                </Box>
              </form>
            ) : (
              <form onSubmit={handleSubmit}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"1rem"}
                  m={"1rem 0"}
                >
                  <Input
                    type="text"
                    name="userName"
                    placeholder="Name"
                    borderRadius={"none"}
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    borderRadius={"none"}
                    onChange={handleChange}
                  />
                  {/* <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  borderRadius={"none"}
                  onChange={handleChange}
                /> */}
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
                  <Input
                    type="tel"
                    name="mobileNumber"
                    placeholder="Mobile Number"
                    borderRadius={"none"}
                    onChange={handleChange}
                  />
                </Box>
                <Box>
                  <Text fontWeight={"bold"}>2. Consents and declarations</Text>
                  <CheckboxGroup colorScheme="orange">
                    <Box
                      display={"flex"}
                      flexDirection={"column"}
                      gap={"1rem"}
                      m={"1rem 0"}
                    >
                      <Checkbox
                        isChecked={checkboxes.selectAll}
                        onChange={handleSelectAll}
                      >
                        Select All Contents
                      </Checkbox>
                      <Checkbox
                        isChecked={checkboxes.privacyPolicy}
                        onChange={() => handleCheckboxChange("privacyPolicy")}
                      >
                        I declare that I have read and accept{" "}
                        <span style={{ color: "teal" }}>
                          the Allegro Terms & Conditions.
                        </span>
                      </Checkbox>
                      <Checkbox
                        isChecked={checkboxes.termsAndConditions}
                        onChange={() =>
                          handleCheckboxChange("termsAndConditions")
                        }
                      >
                        I want to receive from Allegro: discount codes, special
                        offers or other marketing communication, including
                        personalized information about Allegro services and
                        goods available on the website, via electronic
                        communication. I acknowledge that I may withdraw my
                        consent at any time.{" "}
                        <span style={{ color: "gray" }}>(optional)</span>{" "}
                        <span style={{ color: "teal" }}>expand</span>
                      </Checkbox>
                      <Checkbox
                        isChecked={checkboxes.accept}
                        onChange={() => handleCheckboxChange("accept")}
                      >
                        I want to receive from Allegro: discount codes, special
                        offers or other marketing communication, including
                        personalized information about services and goods of
                        entities cooperating with Allegro, available on the
                        website, via electronic communication. I acknowledge
                        that I may withdraw my consent at any time.{" "}
                        <span style={{ color: "gray" }}>(optional)</span>{" "}
                        <span style={{ color: "teal" }}>expand</span>
                      </Checkbox>
                    </Box>
                  </CheckboxGroup>
                </Box>
                <Box display={"flex"} justifyContent={"flex-end"}>
                  <Button
                    type="submit"
                    colorScheme="orange"
                    backgroundColor={"#FF5A00"}
                    borderRadius={"none"}
                    w={{ base: "80%", md: "70%", lg: "60%", xl: "55%" }}
                  >
                    CREATE AN ACCOUNT
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
                      lg: "-11rem",
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
                      lg: "-10.5rem",
                    }}
                  />
                  CONTINUE WITH FACEBOOK
                </Button>
              </form>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
