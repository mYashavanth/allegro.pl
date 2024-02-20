import React, { useState } from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [productData, setProductData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalAmountToPay, setTotalAmountToPay] = useState(0);


  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        productData,
        setProductData,
        searchData,
        setSearchData,
        products,
        setProducts,
        totalAmountToPay,
        setTotalAmountToPay,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
