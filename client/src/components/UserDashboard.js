import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Card } from "react-bootstrap";
function UserDashboard(props) {
  const [uname, setUName] = useState("");
  const [uemail, setUEmail] = useState("");
  const [uphone, setUPhone] = useState("");
  // const [uwork, setUWork] = useState("");
  const [uaddress, setUAddress] = useState("");
  const [udob, setUDob] = useState("");
  // const [unationality, setUNationality] = useState("");

  useEffect(() => {
    let empemailid = sessionStorage.getItem("useremail");
    console.log(empemailid);
    if (empemailid == null) empemailid = props.email;

    console.log("http://localhost:4500/u/search/" + empemailid);
    axios
      .get("http://localhost:4500/u/search/" + empemailid)
      .then((response) => {
        console.log(response);
        setUName(response.data[0].uname);
        setUEmail(response.data[0].uemail);
        setUDob(response.data[0].udob);
        setUPhone(response.data[0].uphone);
        // setUNationality(response.data[0].unationality);
        // setUWork(response.data[0].uwork);
        setUAddress(response.data[0].uaddress);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //////////////////////////////////////////////////

  return (
    <>
      <Navbar />
      <div className="container pt-5">
        <h3 className="mb-2">Hello {uname}</h3>
        <Card>
          <Card.Body>
            <ul
              className="list-unstyled text-secondary"
              style={{ fontSize: "18px" }}
            >
              <li className="mb-2">Name: {uname}</li>
              <li className="mb-2">Email: {uemail}</li>
              <li className="mb-2">Phone: {uphone}</li>
              <li className="mb-2">DOB: {udob}</li>
              <li className="mb-2">Address: {uaddress}</li>
              {/* <li className="mb-2">Occupation: {uwork}</li>
              
              <li className="mb-2">Naitonality: {unationality}</li> */}
            </ul>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default UserDashboard;
