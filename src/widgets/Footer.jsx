import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-sidebar-ring ">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
        {/* Copyright */}
        <p className="text-center sm:text-left text-white">
          © {new Date().getFullYear()} MyBoard. All rights reserved.
        </p>

        {/* Links */}
        <div className="flex gap-6"></div>
      </div>
    </footer>
  );
};

export default Footer;
