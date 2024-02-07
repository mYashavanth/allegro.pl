import {
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import logo from "./Images/logo.png";
import { TbTruckDelivery } from "react-icons/tb";
import { IoHeartOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBag, BsPerson } from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box>
      <Center
        w={"90%"}
        p={2}
        m={"auto"}
        // border={"1px solid red"}
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        gap={{ base: "0.1rem", md: "0.5rem", lg: "0", xl: "0" }}
        justifyContent={"space-between"}
        position={"sticky"}
        top={0}
        zIndex={99}
      >
        <Center
          display={"flex"}
          justifyContent={"space-between"}
          w={{ base: "90%", md: "90%", lg: "auto", xl: "auto" }}
        >
          <Link to="/">
            <Image src={logo} alt="logo" w={"10rem"} />
          </Link>
          <Button
            ref={btnRef}
            colorScheme="orange"
            onClick={onOpen}
            display={{ base: "block", md: "block", lg: "none", xl: "none" }}
          >
            <HamburgerIcon />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="top"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody display={"flex"} gap={2} justifyContent={"center"}>
                <TbTruckDelivery
                  size={40}
                  onClick={() => console.log("hello")}
                  style={{ cursor: "pointer", color: "gray" }}
                />

                <IoHeartOutline
                  size={40}
                  onClick={() => console.log("hello")}
                  style={{ cursor: "pointer", color: "gray" }}
                />

                <IoMdNotificationsOutline
                  size={40}
                  onClick={() => console.log("hello")}
                  style={{ cursor: "pointer", color: "gray" }}
                />

                <BsBag
                  size={35}
                  onClick={() => console.log("hello")}
                  style={{ cursor: "pointer", color: "gray" }}
                />

                <BsPerson
                  size={40}
                  onClick={() => console.log("hello")}
                  style={{ cursor: "pointer", color: "gray" }}
                />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Center>
        <form onSubmit={handleSubmit}>
          <Box
            display={"flex"}
            flexDirection={{
              base: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            gap={0}
          >
            <Input
              type="text"
              placeholder="Search"
              border={"1px solid black"}
              w={{ base: "18rem", md: "40rem", lg: "18rem", xl: "30rem" }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              borderRadius={"none"}
            />
            <Box display={"flex"}>
              <Select
                w={{ base: "10rem", md: "20rem", lg: "10rem", xl: "15rem" }}
                m={"auto"}
                borderRadius={"none"}
              >
                <option>All Categories</option>
                <optgroup label="Categories">
                  <option>Home and Garden</option>
                  <option>Kids</option>
                  <option>Electronics</option>
                  <option>Business and Services</option>
                  <option>Collections and Art</option>
                  <option>Culture and Entertainment</option>
                  <option>Fashion</option>
                  <option>Automotive</option>
                  <option>Real Estate</option>
                  <option>Sports and Travel</option>
                  <option>Supermarket</option>
                  <option>Beauty</option>
                  <option>Health</option>
                </optgroup>
                <optgroup label="Other options">
                  <option>Sellers</option>
                </optgroup>
              </Select>
              <Button
                type="submit"
                colorScheme="orange"
                w={{ base: "8rem", md: "10rem", lg: "8rem", xl: "8rem" }}
                m={"auto"}
                borderRadius={"none"}
                backgroundColor={"#FF5A00"}
              >
                Search
              </Button>
            </Box>
          </Box>
        </form>
        <Box
          display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
          gap={"0.4rem"}
        >
          <TbTruckDelivery
            size={40}
            onClick={() => console.log("hello")}
            style={{ cursor: "pointer", color: "gray" }}
          />

          <IoHeartOutline
            size={40}
            onClick={() => console.log("hello")}
            style={{ cursor: "pointer", color: "gray" }}
          />

          <IoMdNotificationsOutline
            size={40}
            onClick={() => console.log("hello")}
            style={{ cursor: "pointer", color: "gray" }}
          />

          <BsBag
            size={35}
            onClick={() => console.log("hello")}
            style={{ cursor: "pointer", color: "gray" }}
          />

          <Menu>
            <MenuButton>
              <BsPerson
                size={40}
                onClick={() => console.log("hello")}
                style={{ cursor: "pointer", color: "gray" }}
              />
            </MenuButton>
            <MenuList
              width={"60%"}
              position={"relative"}
              left={"17rem"}
              p={"0.5rem"}
            >
              <MenuItem width={"100%"} cursor={"unset"} overflowX={"hidden"}>
                <Box
                  textAlign={"center"}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"1rem"}
                >
                  <Image
                    src="https://a.allegroimg.com/original/34ff27/c479a4f14cf48882cc45615a4b57/thank-you-page-allegro-buy-with-allegro-ba91069bd7"
                    alt="logo"
                    margin={"auto"}
                  />
                  <Heading>Welcome to Allegro!</Heading>
                  <Text>
                    Sign in and see your purchases, favorite offers, and
                    notifications. On Allegro, you are at home!
                  </Text>
                  <Link to="/signin">
                    <Box
                      borderRadius={"0.2rem"}
                      p={"0.5rem"}
                      backgroundColor={"#FF7B33"}
                      color={"white"}
                    >
                      SIGN IN
                    </Box>
                  </Link>
                  <Text>
                    First time on Allegro?{" "}
                    <Link to="/signup" style={{ color: "teal" }}>
                      Sign up
                    </Link>
                  </Text>
                </Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Center>

      <Center
        w={"4rem"}
        h={"4rem"}
        borderRadius={"0.5rem"}
        backgroundColor={"#FF7B33"}
        position={"absolute"}
        top={"46rem"}
        right={"1rem"}
        display={{ base: "none", md: "none", lg: "flex", xl: "flex" }}
      >
        <Image
          src="https://a.allegroimg.com/original/34c243/da301c81474cabfb3a64e33c88f0/action-common-chat-3be8b9f339"
          alt="logo"
        />
      </Center>
    </Box>
  );
};

export default Navbar;
