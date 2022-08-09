import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#191919",
      dark: "#212121",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#2AC17F",
      contrastText: "#000",
    },
  },
});

export default theme;
