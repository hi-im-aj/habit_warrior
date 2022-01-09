import type { NextPage } from "next";
import type { ChangeEvent } from "react";
import { useState } from "react";
import AuthProviderBox from "@/components/boxes/AuthProviderBox";
import { Button, Container, List, ListItem, Paper, TextField } from "@mui/material";
import { useAuth } from "@/utils/auth";

interface Form {
  email: string;
  password: string;
}

const login: NextPage = () => {
  const { signIn } = useAuth();
  const [form, setForm]: [Form, Function] = useState({
    email: "",
    password: "",
  });
  const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const onSubmit = () => signIn(form.email, form.password);
  return (
    <Container maxWidth="xl" component="main">
      <Paper sx={{ maxWidth: "17rem" }}>
        <List>
          <ListItem>
            <TextField onChange={(e) => onChange(e)} label="Email" type="email" name="email" required />
          </ListItem>
          <ListItem>
            <TextField onChange={(e) => onChange(e)} label="Password" type="password" name="password" required />
          </ListItem>
          <ListItem>
            <Button sx={{ width: "100%", mt: "1rem" }} onClick={onSubmit} variant="contained">
              Sign in
            </Button>
          </ListItem>
          <ListItem>
            <AuthProviderBox />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default login;
