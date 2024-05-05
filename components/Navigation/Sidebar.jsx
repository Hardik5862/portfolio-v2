import { Fragment, useState } from "react";
import { useRouter } from "next/router";

import Appbar from "./Appbar";
import { ListContainer } from "./Navigation.styles";

import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import RateReviewIcon from "@mui/icons-material/RateReview";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function SwipeableTemporaryDrawer() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      <Appbar handleOpen={handleOpen} />
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        PaperProps={{ sx: { backgroundColor: "primary.dark" } }}
      >
        <ListContainer
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(true)}
        >
          <List>
            <ListItem button onClick={() => router.push("/")}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => router.push("/projects")}>
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button onClick={() => router.push("/about")}>
              <ListItemIcon>
                <PermIdentityIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => router.push("/skills")}>
              <ListItemIcon>
                <RateReviewIcon />
              </ListItemIcon>
              <ListItemText primary="Skills" />
            </ListItem>
            <ListItem button onClick={() => router.push("/contact")}>
              <ListItemIcon>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </ListContainer>
      </SwipeableDrawer>
    </Fragment>
  );
}
