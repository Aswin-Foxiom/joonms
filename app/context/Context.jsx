"use client";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState, useEffect } from "react";

// Create the context
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setuserDetails] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        console.log("Start to decode");
        const decoded = jwtDecode(token);
        console.log("Decoded", decoded);
        setUser(decoded?.id ?? null);
        setuserDetails(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  return (
    <MyContext.Provider value={{ user, setUser, userDetails, setuserDetails }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
