import type { NextPage } from "next";
import React from "react";
import Navbar from "@/components/Navbar";

const signup: NextPage = () => {
  return (
    <main className="container">
      <Navbar />
      <h1>signup page</h1>
    </main>
  );
};

export default signup;
