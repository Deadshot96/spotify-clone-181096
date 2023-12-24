import React from "react";
import "./Sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SidebarOption from "./SidebarOption/SidebarOption";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify logo"
        className="sidebar__logo"
      />
      <SidebarOption title="Home" Icon={HomeOutlinedIcon} />
      <SidebarOption title="Search" Icon={SearchOutlinedIcon} />
      <SidebarOption title="Your Library" Icon={VideoLibraryOutlinedIcon} />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
    </div>
  );
};

export default Sidebar;
