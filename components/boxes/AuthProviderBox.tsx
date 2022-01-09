import { Box, Button, List, ListItem } from "@mui/material";
import type { FunctionComponent } from "react";
import { useAuth } from "@/utils/auth";

const AuthProviderBox: FunctionComponent = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <Box>
      <List>
        <ListItem>
          <Button onClick={signInWithGoogle}>Sign in with Google</Button>
        </ListItem>
      </List>
    </Box>
  );
};

export default AuthProviderBox;
