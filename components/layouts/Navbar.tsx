import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { Container, Button, Grid, Typography } from "@mui/material";
import { useAuth } from "@/utils/auth";

const Navbar: FunctionComponent = () => {
  const { user } = useAuth();
  const initialOffset = 10;
  const [offset, setOffset] = useState(initialOffset);
  useEffect(() => {
    if (user) {
      setOffset(11);
    } else {
      setOffset(initialOffset);
    }
  });
  return (
    <Container maxWidth="xl" component="nav" sx={{ my: "1rem" }}>
      <Grid container>
        <Grid item xs={offset}>
          <Link href="/">
            <Button>
              <Typography variant="h5">Habit Warrior</Typography>
            </Button>
          </Link>
        </Grid>
        {!user ? (
          <>
            <Grid item>
              <Link href="login">
                <Button>Log in</Button>
              </Link>
            </Grid>
            <Grid item>
              <Link href="signup">
                <Button>Sign up</Button>
              </Link>
            </Grid>
          </>
        ) : (
          <Grid item>
            <Link href="dashboard">
              <Button>Dashboard</Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};

export default Navbar;
