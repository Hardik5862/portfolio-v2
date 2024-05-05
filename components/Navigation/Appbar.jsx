import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SocialIcons from "./SocialIcons";

import { Root, Title } from "./Navigation.styles";

export default function Appbar({ handleOpen }) {
  const router = useRouter();
  const [title, setTitle] = useState("Home");

  useEffect(() => {
    switch (router.pathname) {
      case "/":
        setTitle("Home");
        break;
      case "/projects":
        setTitle("Projects");
        break;
      case "/about":
        setTitle("About");
        break;
      case "/skills":
        setTitle("Skills");
        break;
      case "/contact":
        setTitle("Contact");
        break;
      default:
        setTitle("Error");
        break;
    }
  }, [router.pathname]);

  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleOpen}
          >
            <MenuIcon />
          </IconButton>
          <Title variant="h6">{title}</Title>
          <SocialIcons />
        </Toolbar>
      </AppBar>
    </Root>
  );
}
