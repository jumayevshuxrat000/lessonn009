import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";

function MainLAaout() {
  return (
    <>
      <Header />

      <Outlet />

    </>
  );
}

export default MainLAaout;
