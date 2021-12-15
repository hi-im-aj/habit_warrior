import type { AppProps } from "next/app";
import { AuthProvider } from "@/utils/auth";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Navbar from "@/components/layouts/Navbar";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <AuthProvider>
      <Navbar />
      <Component {...pageProps} />;
    </AuthProvider>
  );
};
