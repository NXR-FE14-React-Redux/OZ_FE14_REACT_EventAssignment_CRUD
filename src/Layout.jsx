import React from "react";
import { Outlet } from "react-router";
import NavBar from "./widgets/NavBar";

const Layout = () => {
  return (
    <div className="w-[100vw]">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
