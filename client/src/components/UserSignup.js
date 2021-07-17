import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function UserSignup() {
  const [ename, setUName] = useState("");
  const [eemail, setUEmail] = useState("");
  const [ephone, setUPhone] = useState("");
  const [edob, setUdob] = useState("");
  const [ework, setUWork] = useState("");
  const [eaddress, setUAddress] = useState("");
  const [enationality, setUNationality] = useState("");
  const [epass, setUPass] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeUName = (e) => setUName(e.target.value);
  const onChangeUEmail = (e) => setUEmail(e.target.value);
  const onChangeUPhone = (e) => setUPhone(e.target.value);
  const onChangeUdob = (e) => setUdob(e.target.value);
  const onChangeUWork = (e) => setUWork(e.target.value);
  const onChangeUAddress = (e) => setUAddress(e.target.value);
  const onChangeUNationality = (e) => setUNationality(e.target.value);
  const onChangeUPass = (e) => setUPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    console.log(`NAME: ${ename}`);
    console.log(`EMAIL: ${eemail}`);

    const info = {
      uname: ename,
      uemail: eemail,
      uphone: ephone,
      udob: edob,
      uwork: ework,
      unationality: enationality,
      uaddress: eaddress,
      upass: epass,
    };

    axios.post("http://localhost:4500/u/register", info).then((res) => {
      console.log(res.data);
      setMessage("Registered Successfully");
    });

    setUName("");
    setUEmail("");
    setUPhone("");
    setUdob("");
    setUWork("");
    setUAddress("");
    setUNationality("");
    setUPass("");
  };

  return (
    <div className="signup-handle">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 form-div">
            <form onSubmit={handleSubmit}>
              <div className="Signup-head">
                <h1 className="text-center">SignUp</h1>
                <h3 className="text-center">Create your account</h3>
              </div>
              <h5 style={{ color: "green" }} className="text-center">
                {msg}
              </h5>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Name"
                  value={ename}
                  onChange={onChangeUName}
                  autoComplete="off"
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email"
                  value={eemail}
                  onChange={onChangeUEmail}
                  autoComplete="off"
                  required
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control form-control-lg"
                  value={edob}
                  onChange={onChangeUdob}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control form-control-lg"
                  autoComplete="off"
                  placeholder="Phone"
                  value={ephone}
                  onChange={onChangeUPhone}
                  required
                ></input>
              </div>
              {/* <div className="form-group">
                <select
                  value={ework}
                  onChange={onChangeUWork}
                  className="form-control form-control-lg"
                >
                  <option value="Student">Student</option>
                  <option value="Private Job">Private Job</option>
                  <option value="Government Job">Government Job</option>
                  <option value="Others">Others</option>
                </select>
              </div> */}
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  autoComplete="off"
                  placeholder="Address"
                  value={eaddress}
                  onChange={onChangeUAddress}
                  required
                ></input>
              </div>
              {/* <div className="form-group">
                <select
                  value={enationality}
                  onChange={onChangeUNationality}
                  className="form-control form-control-lg"
                >
                  <option value="Indian">Indian</option>
                  <option value="Indonesian">Indonesian</option>
                  <option value="Filipino">Filipino</option>
                  <option value="Nepalese">Nepalese</option>
                  <option value="American">American</option>
                  <option value="Others">Others</option>
                </select>
              </div> */}
              <div className="form-group">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  value={epass}
                  onChange={onChangeUPass}
                  required
                ></input>
              </div>
              <div className="form-group">
                <div className="d-grid gap-2 d-md-button">
                  <input
                    type="submit"
                    value="SignUp"
                    className="btn btn-success"
                  />
                </div>
              </div>

              <p className="text-center">
                Aleady a User?
                <Link to="/UserLogin">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignup;
