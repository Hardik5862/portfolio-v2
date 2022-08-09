import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../helpers/theme";

import Header from "../components/Navigation/Sidebar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <div className="main">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
