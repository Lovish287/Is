import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import AdminPostFeed from "./AdminPostFeed";
import { Card, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";

const AdminViewPost = ({ refreshId, refresh }) => {
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
  const deleteSpecificComment = (commentId, postId) => {
    axios
      .delete('http://localhost:4500/posts/comment/${postId}/${commentId}')
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
      <Navbar />
      <br />
      <div >
      <h1 className="text-center">CHECK POSTS</h1>

      <br /> 
      <Container>
      <div>
      <Card className="mt-3"
      style={{
        
        border: "solid #007bff 1px"
        
      }}>
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
            return (
              <AdminPostFeed
                id={value._id}
                key={index}
                imgurl="https://cdn2.momjunction.com/wp-content/uploads/2019/07/Whatsapp-DP9.jpg"
                name={value.name}
                content={value.text}
                comments={value.comments}
                // likes={value.likes}
                deletePost={deletePost}
                
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
    </Container>
      </div>
    </div>
  );
};

export default AdminViewPost
