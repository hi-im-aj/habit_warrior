import type { NextPage } from "next";
import React from "react";
import firebase from "@/lib/firebase";
import Navbar from "@/components/Navbar";

const login: NextPage = () => {
  return (
    <main className="container">
      <Navbar />
      <h1>login page</h1>
    </main>
  );
};

export default login;
