import React, { useState, useEffect } from "react";
import Posts from "../Posts";
import { Card, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import axios from "axios";

const PostFeed = ({ refreshId, refresh }) => {
  const [data, setData] = useState();
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4500/posts/allposts/")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refreshId]);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:4500/posts/${id}/`)
      .then((res) => {
        console.log(res);
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const commentOnPost = (id, comment) => {
    const newComment = {
      text: comment,
      name: sessionStorage.getItem("username"),
      user: sessionStorage.getItem("userid"),
    };
    console.log(newComment);
    console.log(id);
    axios
      .post(`http://localhost:4500/posts/comment/${id}`, newComment)
      .then((res) => {
        console.log(res);
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteSpecificComment = (commentId, postId) => {
    axios
      .delete(`http://localhost:4500/posts/comment/${postId}/${commentId}`)
      .then((res) => {
        console.log(res);
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Card className="mt-3">
        <Card.Body>
          <Button
            variant="primary"
            className="mr-3"
            onClick={() => setCurrentCategory("")}
          >
            All
          </Button>
          <Button
            variant="primary"
            className="mr-3"
            onClick={() => setCurrentCategory("Tech")}
          >
            Tech
          </Button>
          <Button
            variant="primary"
            className="mr-3"
            onClick={() => setCurrentCategory("Science")}
          >
            Science
          </Button>
          <Button
            variant="primary"
            className="mr-3"
            onClick={() => setCurrentCategory("Entertainment")}
          >
            Enterntainment
          </Button>
          <Button
            variant="primary"
            className="mr-3"
            onClick={() => setCurrentCategory("Business")}
          >
            Business
          </Button>
        </Card.Body>
      </Card>
      {data &&
      data.filter((value) => value.category.includes(currentCategory)).length >=
        1 ? (
        data
          .filter((value) => value.category.includes(currentCategory))
          .slice(0)
          .reverse()
          .map((value, index) => {
            console.log(value);
            return (
              <Posts
                id={value._id}
                key={index}
                imgurl="https://icon-library.com/images/free-avatar-icon/free-avatar-icon-13.jpg"
                name={value.name}
                content={value.text}
                comments={value.comments}
                deletePost={deletePost}
                commentOnPost={commentOnPost}
                deleteSpecificComment={deleteSpecificComment}
              />
            );
          })
      ) : (
        <div className="mt-5 text-secondary text-center">
          No Posts in this category
        </div>
      )}
    </div>
  );
};

export default PostFeed;
