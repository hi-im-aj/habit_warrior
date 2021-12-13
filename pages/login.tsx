import type { NextPage } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import LoginBox from "@/components/LoginBox";

const login: NextPage = () => {
  return (
    <main className="container">
      <Navbar />
      <LoginBox />
    </main>
  );
};

export default login;
