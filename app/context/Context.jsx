"use client";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState, useEffect } from "react";

// Create the context
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("THE TOKEN", token);
    if (token) {
      try {
        console.log("Start to decode");
        const decoded = jwtDecode(token);
        console.log("Decoded");
        setUser(decoded?.id ?? null);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
