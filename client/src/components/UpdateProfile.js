import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Button, Form } from "react-bootstrap";

function UpdateProfile(props) {
  const [uname, setUName] = useState("");
  const [uemail, setUEmail] = useState("");
  const [uphone, setUPhone] = useState("");
  const [uwork, setUWork] = useState("");
  const [uaddress, setUAddress] = useState("");
  const [upass, setUPass] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeUName = (e) => setUName(e.target.value);
  const onChangeUEmail = (e) => setUEmail(e.target.value);
  const onChangeUPhone = (e) => setUPhone(e.target.value);

  const onChangeUWork = (e) => setUWork(e.target.value);
  const onChangeUAddress = (e) => setUAddress(e.target.value);

  const onChangeUPass = (e) => setUPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const info = {
      uemail: uemail,
      uphone: uphone,
      upass: upass,
      uname: uname,
      uwork: uwork,
      uaddress: uaddress,
    };

    console.log("sending", info);

    axios
      .put("http://localhost:4500/u/update", info)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let empemailid = sessionStorage.getItem("useremail");
    console.log(empemailid);
    if (empemailid == null) empemailid = props.email;
    axios
      .get("http://localhost:4500/u/search/" + empemailid)
      .then((response) => {
        console.log(response);
        console.log(response.data[0].uname);
        setUName(response.data[0].uname);
        setUEmail(response.data[0].uemail);
        setUPhone(response.data[0].uphone);

        setUWork(response.data[0].uwork);
        setUAddress(response.data[0].uaddress);
        setUPass(response.data[0].upass);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <h2>Update Your Profile</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name :</Form.Label>
            <Form.Control
              value={uname}
              onChange={(e) => setUName(e.target.value)}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={uemail}
              // onChange={onChangeUEmail}
              placeholder="Enter Email"
              readOnly
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone :</Form.Label>
            <Form.Control
              type="number"
              value={uphone}
              onChange={onChangeUPhone}
              placeholder="Enter Mobile No"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={upass}
              onChange={onChangeUPass}
              placeholder="Enter Password"
              required
            />
          </Form.Group>
          {/* <select
            value={uwork}
            onChange={onChangeUWork}
            className="w-100 p-2 text-secondary rounded"
          >
            <option value="Student">Student</option>
            <option value="Private Job">Private Job</option>
            <option value="Government Job">Government Job</option>
            <option value="Others">Others</option>
          </select> */}

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              value={uaddress}
              onChange={onChangeUAddress}
              rows={2}
            />
          </Form.Group>
          <br />

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default UpdateProfile;
