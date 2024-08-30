"use client";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { createContext, useState, useEffect } from "react";
import { BaseUrl } from "../utils/BaseUrl";

// Create the context
const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userDetails, setuserDetails] = useState(null);

  useEffect(async () => {
    const token = localStorage.getItem("token");
    if (token) {
      // try {
      //   console.log("Start to decode");
      //   const decoded = jwtDecode(token);
      //   console.log("Decoded", decoded);
      //   setUser(decoded?.id ?? null);
      //   setuserDetails(decoded);
      // } catch (error) {
      //   localStorage.clear();
      // }
      const config = {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      };
      const response = await axios.get(`${BaseUrl}/users/profile`, config);
      if (response?.data?.data?.profile) {
        const decoded = jwtDecode(token);
        setUser(decoded?.id ?? null);
        setuserDetails(decoded);
      } else {
        localStorage.clear();
        window.location.reload();
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
