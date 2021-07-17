const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");

const PostModel = require("../models/posts");
const UModel = require("../models/users");

router.get("/test", (req, res) => res.json({ msg: "Posts works" }));

//create post
router.post("/create", (req, res) => {
  const postobj = new PostModel({
    text: req.body.text,
    name: req.body.name,
    user: req.body.user,
    category: req.body.category,
  });
  postobj
    .save()
    .then((inserteddocument) => {
      res
        .status(200)
        .send(
          "DOCUMENT INSERTED IN MONGODB DATABASE" + "<br>" + inserteddocument
        );
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error in  Save " });
    });
});

//delete
router.delete("/:id", (req, res) => {
  PostModel.findById(req.params.id)
    .then((post) => {
      // Check for post owner
      // if (post.user.toString() !== req.body.id) {
      //   return res.status(401).json({ notauthorized: "User not authorized" });
      // }

      // Delete
      post.remove().then(() => res.json({ success: true }));
    })
    .catch((err) => res.status(404).json({ postnotfound: "No post found" }));
});

//get post
router.get("/posts/:id", (req, res) => {
  PostModel.find({ id: req.params.id })
    .populate()
    .then((getsearchdocument) => {
      if (getsearchdocument.length > 0) {
        res.send(getsearchdocument);
      } else {
        return res
          .status(404)
          .send({ message: "Note not found with id " + req.params.postid });
      }
    })
    .catch((err) => {
      return res.status(500).send({
        message: "DB Problem..Error in Retriving with id " + req.params.postid,
      });
    });
});

//all posts
router.get("/allposts", (req, res) => {
  PostModel.find()
    .then((getalldocumentsfrommongodb) => {
      res.status(200).send(getalldocumentsfrommongodb);
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Error in Fetch Posts " });
    });
});

//create comment

router.post("/comment/:id", (req, res) => {
  PostModel.findById(req.params.id)
    .then((post) => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        user: req.body.id,
      };

      // Add to comments array
      post.comments.unshift(newComment);

      // Save
      post.save().then((post) => res.json(post));
    })
    .catch((err) => res.status(404).json({ postnotfound: "No post found" }));
});

//comment delete

router.delete("/comment/:id/:comment_id", (req, res) => {
  PostModel.findById(req.params.id)
    .then((post) => {
      // Check to see if comment exists
      if (
        post.comments.filter(
          (comment) => comment._id.toString() === req.params.comment_id
        ).length === 0
      ) {
        return res
          .status(404)
          .json({ commentnotexists: "Comment does not exist" });
      }

      // Get remove index
      const removeIndex = post.comments
        .map((item) => item._id.toString())
        .indexOf(req.params.comment_id);

      // Splice comment out of array
      post.comments.splice(removeIndex, 1);

      post.save().then((post) => res.json(post));
    })
    .catch((err) => res.status(404).json({ postnotfound: "No post found" }));
});

module.exports = router;
