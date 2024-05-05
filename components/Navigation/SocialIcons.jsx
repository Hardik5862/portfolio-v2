import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const SocialIcons = () => {
  return (
    <>
      <IconButton
        href="https://www.linkedin.com/in/hardik-sachan-b0ab7b1a2"
        target="_blank"
        aria-label="LinkedIn"
        color="inherit"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/hardik.sachan.583/"
        target="_blank"
        aria-label="facebook"
        color="inherit"
      >
        <FacebookIcon />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/hardik0casr/"
        target="_blank"
        aria-label="Instagram"
        color="inherit"
      >
        <InstagramIcon />
      </IconButton>
    </>
  );
};

export default SocialIcons;
