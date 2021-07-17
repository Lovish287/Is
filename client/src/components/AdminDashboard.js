import React from 'react'
import { Redirect } from "react-router-dom";
import Navbar from './Navbar';
import {ReactComponent as Illustration} from "./img/admin.svg"
import './style.css';

function AdminDashboard() {
  let authuser = sessionStorage.getItem('Key_Variable')
  console.log(authuser)
  if (authuser == null) {
    return (<Redirect to="/AdminLogin" />)
  }
  else {
    return (
      <div>
        <Navbar/>
        <br />
        <h3 className="text-center">WELCOME ADMIN</h3>
        <br /><br />
        <Illustration className="Illustration " />
       
      </div>
    )
  }
}

export default AdminDashboard
