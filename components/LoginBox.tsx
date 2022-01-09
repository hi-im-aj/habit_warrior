import type { FunctionComponent } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { auth as firebaseAuth } from "@/lib/firebase";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/dashboard",
  signInOptions: [GoogleAuthProvider.PROVIDER_ID],
};

const LoginBox: FunctionComponent = () => {
  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
    </div>
  );
};

export default LoginBox;
