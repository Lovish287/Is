const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
require("dotenv").config();

const UModel = require("../models/users");

//registering the user

router.post("/register", (req, res) => {
  const uobj = new UModel({
    uname: req.body.uname,
    uemail: req.body.uemail,
    udob: req.body.udob,
    uphone: req.body.uphone,
    uwork: req.body.uwork,
    uaddress: req.body.uaddress,
    unationality: req.body.unationality,
    upass: req.body.upass,
  });

  uobj
    .save()
    .then((inserteddocument) => {
      res.status(200).send("Data saved in databse" + "<br>" + inserteddocument);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error in saving the user data in database",
      });
    });
});

//searching the email of user

router.get("/search/:emailid", (req, res) => {
  console.log(req.params.emailid);
  UModel.find({ uemail: req.params.emailid })
    .populate()
    .then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      } else {
        return res
          .status(404)
          .send({ message: "Email id not found " + req.params.uid });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Database error in fetching email " + req.params.uid,
      });
    });
});

//getting all data from database

router.get("/", (req, res) => {
  UModel.find()
    .then((getalldocumentsfrommongodb) => {
      res.status(200).send(getalldocumentsfrommongodb);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Database error in fetching user data ",
      });
    });
});

//Checking login

router.post("/login", (req, res) => {
  UModel.find({ uemail: req.body.uemail, upass: req.body.upass })
    .then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      } else {
        return res
          .status(400)
          .send({ message: "Your Data is not found" + req.params.uid });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "Database error in fetching your Data " + req.params.uid,
      });
    });
});

//Update Profile
router.put(
  "/update",
  (req, res) => {
    UModel.findOneAndUpdate(
      { uemail: req.body.uemail },
      {
        $set: {
          uphone: req.body.uphone,
          upass: req.body.upass,
          uname: req.body.uname,
          uwork: req.body.uwork,
          uaddress: req.body.uaddress,
        },
      },
      { new: true }
    )
      .then((getupdateddocument) => {
        if (getupdateddocument != null)
          res.status(200).send("DOCUMENT UPDATED " + getupdateddocument);
        else res.status(404).send("INVALID EMAILID " + req.body.uemail);
      }) // CLOSE THEN
      .catch((err) => {
        return res.status(500).send({
          message: "DB Problem..Error in UPDATE with id " + req.params.uid,
        });
      }); // CLOSE CATCH
  } //CLOSE CALLBACK FUNCTION Line No 108
); //CLOSE PUT METHOD Line No 107

//delete profile

router.delete("/remove/:emailid", (req, res) => {
  UModel.findOneAndRemove({ uemail: req.params.emailid })
    .then((deleteddocument) => {
      if (deleteddocument != null) {
        res
          .status(200)
          .send("DOCUMENT DELETED successfully!" + deleteddocument);
      } else {
        res.status(404).send("INVALID EMP ID " + req.params.uid);
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "DB Problem..Error in Delete with id " + req.params.uid,
      });
    });
});

//Contact Us

const transporter = nodemailer.createTransport({
  host: "smtp.googlemail.com", //replace with your email provider
  port: 587,
  auth: {
    user: "at7802731@gmail.com",
    pass: "at7801A1234",
  },
});
// verify connection configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});
router.post("/contact", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var subject = req.body.subject;
  var message = req.body.message;

  var mail = {
    from: name,
    to: "at7802731@gmail.com",
    subject: subject,
    text: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      res.json({
        status: "success",
      });
    }
  });
});
module.exports = router;
