import type { FunctionComponent } from "react";
import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth } from "@/lib/firebase";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/dashboard",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

const LoginBox: FunctionComponent = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default LoginBox;
