import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Header />
      <div className="flex text-4xl text-center justify-center items-center h-[80vh] ">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
