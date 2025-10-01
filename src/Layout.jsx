import React from "react";
import { Outlet } from "react-router";
import NavBar from "./widgets/NavBar";

const Layout = () => {
  return (
    <div className="w-[100vw] min-h-screen">
      <NavBar />
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
