import type { AppProps } from "next/app";
import { AuthProvider } from "@/utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
};
