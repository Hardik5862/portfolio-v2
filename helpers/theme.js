import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#191919",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2AC17F",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: `'Montserrat', sans-serif;`,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#000000",
        },
      },
    },
  },
});

export default theme;
