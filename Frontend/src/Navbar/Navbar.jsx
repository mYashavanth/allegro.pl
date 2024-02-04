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
  Image,
  Input,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import logo from "./Images/logo.png";
import { TbTruckDelivery } from "react-icons/tb";
import { IoHeartOutline } from "react-icons/io5";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsBag, BsPerson } from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";

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
    <Box border={"1px solid black"}>
      <Center
        w={"90%"}
        p={2}
        m={"auto"}
        border={"1px solid red"}
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row", xl: "row" }}
        gap={{ base: "0.1rem", md: "0.5rem", lg: "0", xl: "0" }}
        justifyContent={"space-between"}
      >
        <Center
          display={"flex"}
          justifyContent={"space-between"}
          w={{ base: "90%", md: "90%", lg: "auto", xl: "auto" }}
        >
          <Image src={logo} alt="logo" w={"10rem"} />
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

              <DrawerBody>
                <Input placeholder="Type here..." />
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
            />
            <Box display={"flex"}>
              <Select
                w={{ base: "10rem", md: "20rem", lg: "10rem", xl: "15rem" }}
                m={"auto"}
              >
                <option>Collections and art</option>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
                <option>Option 4</option>
                <option>Option 5</option>
              </Select>
              <Button
                type="submit"
                colorScheme="orange"
                w={{ base: "8rem", md: "10rem", lg: "8rem", xl: "8rem" }}
                m={"auto"}
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

          <HiOutlineChatAlt2
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
        </Box>
      </Center>
    </Box>
  );
};

export default Navbar;
