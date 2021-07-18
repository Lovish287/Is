import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "./img/logo.png";

function Navbar() {
  let authuser = sessionStorage.getItem("Key_Variable");
  if (authuser === "ADMIN") {
    return (
      <nav className="navbar navbar-light bg-body" id="navadmin">
        <div className="container-fluid">
          <Link to="/AdminDashboard" className="navbar-brand">
            <img src={logo} height="60" width="150" alt="interest space"></img>
          </Link>
          <div className="btn-group justify-content-end" role="group">
            <Link to="/AdminViewpost" className="nav-link">
              <button type="button" className="btn btn-outline-danger">
                Check Posts
              </button>
            </Link>

            <Link to="/Logout" className="nav-link">
              <button type="button" className="btn btn-outline-danger">
                Logout
              </button>
            </Link>
          </div>
        </div>
      </nav>
    );
  } else if (authuser === "USER") {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/UserDashboard" className="navbar-brand">
            <img src={logo} height="60" width="150" alt="interest space"></img>
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="/UserDashboard"
                  className="nav-link"
                  aria-current="page"
                  active="bg-black"
                >
                  <button type="button" className="btn btn-outline-info">
                    Dashboard
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/posts" className="nav-link">
                  <button type="button" className="btn btn-outline-info">
                    Posts
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/UpdateProfile" className="nav-link">
                  <button type="button" className="btn btn-outline-info">
                    Update Profile
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/UserDeleteProfile" className="nav-link">
                  <button type="button" className="btn btn-outline-info">
                    Delete Profile
                  </button>
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/Logout" className="nav-link">
                  <button type="button" className="btn btn-outline-info">
                    Logout
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg  navbar-dark">
        <div className="container-fluid" id="navhome">
          <Link to="/" className="navbar-brand">
            <img src={logo} height="60" width="150" alt="interest space"></img>
          </Link>
         

          <div
            className="collapse navbar-collapse navbar-nav justify-content-center"
            id="navbarSupportedContent"
          >
            <div className="btn-group" role="group">
              <Link to="/UserLogin" className="nav-link">
                <button type="button" className="btn btn-outline-info">
                  Login
                </button>
              </Link>

              <Link to="/UserSignup" className="nav-link">
                <button type="button" className="btn btn-outline-info">
                  Signup
                </button>
              </Link>

              <Link to="/AboutUs" className="nav-link">
                <button type="button" className="btn btn-outline-info">
                  About
                </button>
              </Link>

              <Link to="/ContactUs" className="nav-link">
                <button type="button" className="btn btn-outline-info">
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
