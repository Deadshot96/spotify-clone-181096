import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar/Sidebar";

const Player = () => {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
      </div>
      {/* Footer */}
    </div>
  );
};

export default Player;
