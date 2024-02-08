import React from "react";

export const AuthContext = React.createContext();

export default function AuthContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
