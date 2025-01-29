import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // Check if the token exists in localStorage
  const token = localStorage.getItem("token");

  // If token exists, allow access, otherwise redirect to Login
  return token ? <Outlet /> : <Navigate to="/Login" replace />;
};

export default PrivateRoute;
