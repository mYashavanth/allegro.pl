import { Box, Button, Image, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "./Images/logo.png";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
    setSearch("");
  };
  return (
    <Box border={"1px solid black"}>
      <Box w={"90%"} p={2} m={"auto"} border={"1px solid red"}>
        <Image src={logo} alt="logo" />
        <form onSubmit={handleSubmit}>
          <Box display={"flex"} gap={0}>
            <Input
              type="text"
              placeholder="Search"
              border={"1px solid black"}
              w={"40%"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Select w={"15%"}>
              <option>Collections and art</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
            </Select>
            <Button type="submit" colorScheme="orange" w={"10%"}>
              Search
            </Button>
          </Box>
        </form>
        <Box>
            
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
