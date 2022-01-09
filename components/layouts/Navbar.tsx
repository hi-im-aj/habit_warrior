import { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { Container, Button, Grid, Typography } from "@mui/material";
import { useAuth } from "@/utils/auth";

const Navbar: FunctionComponent<any> = ({ router }) => {
  const { user } = useAuth();
  const initialOffset = 10;
  const [offset, setOffset] = useState(initialOffset);

  useEffect(() => {
    if (user) {
      setOffset(11);
    } else {
      setOffset(initialOffset);
    }
  }, [user, router.pathname]);

  const links = (() => {
    if (!user) {
      return (
        <Grid item>
          <Link href="login">
            <Button>Log in</Button>
          </Link>
          <Link href="signup">
            <Button>Sign up</Button>
          </Link>
        </Grid>
      );
    } else if (router.pathname !== "/dashboard") {
      return (
        <Grid item>
          <Link href="dashboard">
            <Button>Dashboard</Button>
          </Link>
        </Grid>
      );
    }
    return null;
  })();

  return (
    <Container maxWidth="xl" component="nav" sx={{ my: "1rem" }}>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={offset}>
          <Link href="/">
            <Button>
              <Typography variant="h5">Habit Warrior</Typography>
            </Button>
          </Link>
        </Grid>
        {links}
      </Grid>
    </Container>
  );
};

export default withRouter(Navbar);
