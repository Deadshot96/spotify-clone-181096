import React from "react";
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <SearchOutlinedIcon />
        <input type="text" placeholder="What do you want to hear?" />
      </div>
      <div className="header__right">
        <Avatar src="" alt="BP" />
        <h4>Bhushan Patil</h4>
      </div>
    </div>
  );
};

export default Header;
