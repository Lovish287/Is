import React from "react";
import { Redirect } from "react-router-dom";

function Logout() {
  let authuser = sessionStorage.getItem("Key_Variable");
  console.log(authuser);
  if (authuser === "ADMIN") {
    sessionStorage.removeItem("Key_Variable");
  } else if (authuser === "USER") {
    sessionStorage.removeItem("Key_Variable");
    sessionStorage.removeItem("useremail");
    sessionStorage.removeItem("username");
  }
  return <Redirect to="/" />;
}

export default Logout;
