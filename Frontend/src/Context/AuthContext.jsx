import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, productData, setProductData, searchData, setSearchData }}>
      {children}
    </AuthContext.Provider>
  );
}
