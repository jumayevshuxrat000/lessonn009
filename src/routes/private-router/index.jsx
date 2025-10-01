import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const data = localStorage.getItem("user");

  if (!data) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
}

export default PrivateRoute;