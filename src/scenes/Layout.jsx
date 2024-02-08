import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footbar from "./Footbar";


const Layout = () => {
  return (
    <div className="flex flex-col h-screen w-screen first-letter:select-none">
      <div className="flex-none">
        <Header />
      </div>
      <div className="flex-grow overflow-y-scroll">
        <Outlet />
      </div>
      <div className="flex-none">
        <Footbar />
      </div>
    </div>
  );
};

export default Layout;
