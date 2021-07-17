import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function UserDeleteProfile(props) {
  const [uemail, setUEmail] = useState("");
  const [msg, setMessage] = useState("");

  const onChangeUEmail = (e) => {
    setUEmail(e.target.value);
    setMessage(""); //REMOVE ERROE MSG
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Form submitted:`);
    console.log(`EMAIL ID: ${uemail}`);

    axios
      .delete("http://localhost:4500/u/remove/" + uemail)
      .then((res) => {
        console.log(res.data);
        setMessage("SUCCESSFULLY DELETED");
        props.history.push("/Logout");
      })
      .catch((err) => {
        console.log(err);
        setMessage("INVALID EMAIL ID");
      });

    setUEmail("");
  };
  useEffect(() => {
    let empemailid = sessionStorage.getItem("useremail");
    console.log(empemailid);
    if (empemailid == null) empemailid = props.email;
    axios
      .get("http://localhost:4500/u/search/" + empemailid)
      .then((response) => {
        setUEmail(response.data.uemail);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Navbar />
      <div className="container">
        <br />
        <h1>Account Deletion</h1>
        <br />
        <h3>Are you sure you want to delete your profile with the email : </h3>
        <br />
        <b style={{ color: "red" }}>{msg}</b>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={uemail}
            onChange={(e) => onChangeUEmail(e)}
            placeholder="EMAIL ID"
          />
          <br />
          <br />
          <input
            type="submit"
            value="DELETE ACCOUNT"
            className="btn btn-danger"
          />
        </form>
      </div>
    </>
  );
}

export default UserDeleteProfile;
