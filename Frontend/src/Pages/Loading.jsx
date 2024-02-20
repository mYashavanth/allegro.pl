import React from "react";
import styles from "./Loading.module.css";
import { Box } from "@chakra-ui/react";
const Loading = () => {
  return (
    <Box
      h={"85vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div className={styles.loader}>
        Loading
        <span></span>
      </div>
    </Box>
  );
};

export default Loading;
