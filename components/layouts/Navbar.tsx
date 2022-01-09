import type { FunctionComponent } from "react";
import Link from "next/link";
import { Container, Button, Grid, Typography } from "@mui/material";

const Navbar: FunctionComponent = () => {
  return (
    <Container maxWidth="xl" component="nav" sx={{ my: "1rem" }}>
      <Grid container>
        <Grid item xs={10}>
          <Link href="/">
            <Button>
              <Typography variant="h5">Habit Warrior</Typography>
            </Button>
          </Link>
        </Grid>
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
      </Grid>
    </Container>
  );
};

export default Navbar;
