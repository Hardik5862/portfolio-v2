import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../helpers/theme";

import Header from "../components/Navigation/Sidebar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div className="main">
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
