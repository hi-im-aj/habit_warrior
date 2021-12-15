import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "@/components/layouts/Navbar";

const home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Habit Warrior!</title>
        <meta name="description" content="A powerful habit tracking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <h1>hello world</h1>
      </main>
    </>
  );
};

export default home;
