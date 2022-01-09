import type { AppProps } from "next/app";
import { AuthProvider } from "@/utils/auth";
import "../styles/globals.css";
import Navbar from "@/components/layouts/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

export default ({ Component, pageProps }: AppProps) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[600],
      },
    },
  });
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />;
      </ThemeProvider>
    </AuthProvider>
  );
};
