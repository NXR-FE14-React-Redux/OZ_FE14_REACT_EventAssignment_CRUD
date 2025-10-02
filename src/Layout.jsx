import React from "react";
import { Outlet } from "react-router";
import NavBar from "./widgets/NavBar";
import Footer from "./widgets/Footer";

const Layout = () => {
  return (
    <div className="w-[100vw] flex flex-col min-h-screen bg-indigo-50">
      <NavBar />
      <div className="flex-grow flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
