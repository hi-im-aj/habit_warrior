import type { NextPage } from "next";
import { useAuth } from "@/utils/auth";
import { Container, CircularProgress, Box } from "@mui/material";
import { useEffect } from "react";

const dashboard: NextPage = () => {
  const { user, signOut } = useAuth();

  useEffect(() => {}, [user]);

  return (
    <Container maxWidth="xl" component="main">
      {user ? (
        <Box>
          <h2>Welcome {user.email.split("@")[0]}</h2>
          <button onClick={signOut}>Sign out</button>
        </Box>
      ) : (
        <Box sx={{ display: "flex", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  );
};

export default dashboard;
