const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  uname: { type: String },
  uemail: { type: String },
  udob: { type: String },
  uphone: { type: String },
  // uwork: { type: String },
  uaddress: { type: String },
  // unationality: { type: String },
  upass: { type: String },
  regdatetime: { type: Date, default: Date.now },
});

module.exports = mongoose.model("u_schema", UserSchema);
