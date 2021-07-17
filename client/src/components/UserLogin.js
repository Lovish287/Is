import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function UserLogin(props) {
  const [eemail, setUEmail] = useState("");
  const [epass, setUPass] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeUEmail = (e) => setUEmail(e.target.value);
  const onChangeUPass = (e) => setUPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${eemail}`);
    console.log(`PASS: ${epass}`);

    const logininfo = {
      uemail: eemail,
      upass: epass,
    };

    axios
      .post("http://localhost:4500/u/login", logininfo)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("Key_Variable", "USER");
        sessionStorage.setItem("useremail", res.data[0].uemail);
        sessionStorage.setItem("username", res.data[0].uname);
        sessionStorage.setItem("userid", res.data[0]._id);
        props.history.push("/UserDashboard");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Invalid Credentials");
      });

    setUEmail("");
    setUPass("");
  };

  return (
    <div>
      <Navbar />
      <div className="l-container">
        <div className="col-md-4 offset-md-4 form-div">
          <form onSubmit={handleSubmit}>
            <div className="f-row">
              <div className="log">
                <h3 className="text-center">Login</h3>
              </div>
              <h5 style={{ color: "red" }} className="text-center">
                {msg}
              </h5>
              <div className="form-group">
                <input
                  type="email"
                  value={eemail}
                  onChange={onChangeUEmail}
                  required
                  className="form-control form-control-lg"
                  placeholder="Email"
                ></input>
              </div>

              <div className="form-group">
                <input
                  type="Password"
                  required
                  value={epass}
                  onChange={onChangeUPass}
                  className="form-control form-control-lg"
                  placeholder="Password"
                ></input>
              </div>

              <div className="form-group">
                <div className="d-grid gap-2 col-13">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-success"
                  ></input>
                </div>
              </div>
              <br />

              <p className="text-center">
                Don't have an account? <Link to="/UserSignup">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
