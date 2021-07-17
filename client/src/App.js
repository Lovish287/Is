import CreatePost from "./components/CreatePost";
import Posts from "./components/Posts";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import AboutUs from "./components/AboutUs";
import AdminDashboard from "./components/AdminDashboard";
import AdminLogin from "./components/AdminLogin";
import AdminViewpost from "./components/AdminViewpost";
import ContactUs from "./components/ContactUs";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Logout from "./components/Logout";
import UpdateProfile from "./components/UpdateProfile";
import UserDashboard from "./components/UserDashboard";

import UserDeleteProfile from "./components/UserDeleteProfile";
import UserLogin from "./components/UserLogin";
import UserPostFeed from "./components/UserPostFeed";
import UserSignup from "./components/UserSignup";
import UserViewPost from "./components/UserViewPost";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/AboutUs" component={AboutUs} />
          <Route path="/AdminDashboard" component={AdminDashboard} />
          <Route path="/AdminLogin" component={AdminLogin} />
          <Route path="/AdminViewpost" component={AdminViewpost} />
          <Route path="/ContactUs" component={ContactUs} />
          <Route path="/Home" component={Home} />
          <Route path="/Logout" component={Logout} />
          <Route path="/UpdateProfile" component={UpdateProfile} />
          <Route path="/UserDashboard" component={UserDashboard} />
         
          <Route path="/UserDeleteProfile" component={UserDeleteProfile} />
          <Route path="/UserLogin" component={UserLogin} />
          <Route path="/posts" component={UserPostFeed} />
          <Route path="/UserSignup" component={UserSignup} />
          <Route path="/UserViewPost" component={UserViewPost} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
