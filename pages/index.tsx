import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@mui/material";

const home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Habit Warrior!</title>
        <meta name="description" content="A powerful habit tracking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxWidth="xl"></Container>
    </>
  );
};

export default home;
