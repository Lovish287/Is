const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: { type: String, required: true, max: 4, ref: "u_schema" },
  text: { type: String, required: true },
  name: { type: String },
  category: { type: String, required: true },
  comments: [
    {
      user: { type: String },
      text: { type: String },
      name: { type: String },
    },
  ],
});

module.exports = mongoose.model("post_schema_collection", PostSchema);
