import type { NextPage } from "next";
import Head from "next/head";
import React, { Fragment } from "react";
import Navbar from "@/components/Navbar";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Habit Warrior!</title>
        <meta name="description" content="A powerful habit tracking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <Navbar />
        <h1>hello world</h1>
      </main>
    </Fragment>
  );
};

export default Home;
