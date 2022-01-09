import type { NextPage } from "next";
import type { ChangeEvent } from "react";
import { Button, Container, List, ListItem, Paper, TextField } from "@mui/material";
import { useState } from "react";
import { useAuth } from "@/utils/auth";
import AuthProviderBox from "@/components/boxes/AuthProviderBox";

interface Form {
  email: string;
  password: string;
}

const signup: NextPage = () => {
  const { signUpWithEmailAndPassword } = useAuth();
  const [form, setForm]: [Form, Function] = useState({
    email: "",
    password: "",
  });
  const onChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const onSubmit = () => {
    signUpWithEmailAndPassword(form.email, form.password);
  };

  return (
    <Container maxWidth="xl">
      <Paper sx={{ maxWidth: "17rem" }}>
        <List>
          <ListItem>
            <TextField onChange={(e) => onChange(e)} label="Email" type="email" required name="email" />
          </ListItem>
          <ListItem>
            <TextField onChange={(e) => onChange(e)} label="Password" type="password" required name="password" />
          </ListItem>
          <ListItem>
            <Button onClick={onSubmit} variant="contained" sx={{ width: "100%", mt: "1rem" }}>
              Create Account
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

export default signup;
