import type { NextPage } from "next";
import { useAuth } from "@/utils/auth";
import { Container } from "@mui/material";

const dashboard: NextPage = () => {
  const { user, signOut } = useAuth();
  return (
    <Container maxWidth="xl" component="main">
      <h1>Dashboard</h1>
      {user && (
        <>
          <h2>{user && user.email}</h2>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </Container>
  );
};

export default dashboard;
