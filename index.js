const express = require("express");
const bodyParser = require("body-parser");
const userAPI = require("./controllers/userAPI");
const postAPI = require("./controllers/postAPI");
var cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4500;
app.use(bodyParser.json());
app.use(cors());

const mongoose = require("./db_connect");

app.use("/u", userAPI);
app.use("/posts", postAPI);

if(process.env.NODE_ENV == "production"){
app.use(express.static("client/build"));
const path =require("path");
app.get("*",(res,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build,'index.html'));
}
)
}

app.listen(PORT, () => console.log("EXPRESS Server Started at Port No: 4500"));
