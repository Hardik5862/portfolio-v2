import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterIcon = ({ handleTitle }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (text) => {
    handleTitle(text);
    handleClose();
  };

  return (
    <>
      <IconButton
        aria-label="filter projects"
        aria-controls="simple-menu"
        aria-haspopup="true"
        color="inherit"
        onClick={handleClick}
      >
        <FilterListIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleSelect("Top Projects")}>
          Top Projects
        </MenuItem>
        <MenuItem onClick={() => handleSelect("Web Development")}>
          Web Development
        </MenuItem>
        <MenuItem onClick={() => handleSelect("Graphic Design")}>
          Graphic Design
        </MenuItem>
      </Menu>
    </>
  );
};

export default FilterIcon;
