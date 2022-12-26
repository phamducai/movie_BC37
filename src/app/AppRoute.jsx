import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

// HOC: High order component
// Route Guard
const AppRoute = ({ component: Comp, isPrivate, isAuth }) => {
  const token = localStorage.getItem("token");
  const profile = useSelector((state) => state.user.profile);

  if (isPrivate) {
    if (token) return <Comp />;
    return <Navigate to="/login" replace />;
  }

  //login,signup
  if (isAuth) {
    if (!profile) return <Comp />;
    return <Navigate to="/" replace />;
  }

  return <Comp />;
};

export default AppRoute;

// login => login success => navigate => Home
// Home
