import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = ({ isMobile, setIsMobile }) => {
  return (
    <div className={!isMobile ? "sidebar" : "sidebarMobile"}>
      <Navbar />
      <Search />
      <Chats setIsMobile={setIsMobile} isMobile={isMobile} />
    </div>
  );
};

export default Sidebar;
