import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";

function ContactUs() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");

  const onNameChange = (e) => {
    setname(e.target.value);
  };
  const onEmailChange = (e) => {
    setemail(e.target.value);
  };
  const onSubjectChange = (e) => {
    setsubject(e.target.value);
  };
  const onPhoneChange = (e) => {
    setphone(e.target.value);
  };
  const onMessageChange = (e) => {
    setmessage(e.target.value);
  };

  const submitEmail = (e) => {
    console.log("in submit");
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message,
      phone: phone,
    };
    axios
      .post("http://localhost:4500/u/contact/", data)
      .then((res) => {
        alert("Message Sent.");
        console.log(res);
        // resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetForm = () => {
    setname("");
    setemail("");
    setmessage("");
    setsubject("");
    setphone("");
  };

  return (
    <>
      <Navbar />
      <div className="section">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">Contact Us</h2>
                <p>
                  Let us know what you think! In order to provide better
                  service, please do not hesitate to give us your feedback.
                  Thank you.
                </p>
                <hr />
                <form id="contact-form" onSubmit={submitEmail} method="POST">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          placeholder="Name"
                          id="name"
                          type="text"
                          className="form-control"
                          required
                          value={name}
                          onChange={onNameChange}
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          placeholder="Email"
                          id="email"
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                          required
                          value={email}
                          onChange={onEmailChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      placeholder="Subject"
                      id="subject"
                      type="text"
                      className="form-control"
                      required
                      value={subject}
                      onChange={onSubjectChange}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Message"
                      id="message"
                      className="form-control"
                      rows="2"
                      required
                      value={message}
                      onChange={onMessageChange}
                    />
                  </div>
                  <Button variant="success" type="submit">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
