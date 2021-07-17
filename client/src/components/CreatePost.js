import axios from "axios";
import React, { useState } from "react";
import { Card, Button, Form, Dropdown, DropdownButton } from "react-bootstrap";

const CreatePost = (props) => {
  const [category, setCategory] = useState("Tech");
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const details = {
      text: postContent,
      name: sessionStorage.getItem("username"),
      user: sessionStorage.getItem("userid"),
      category: category,
    };

    console.log(details);

    axios
      .post("http://localhost:4500/posts/create/", details)
      .then((res) => {
        console.log(res);
        setPostContent("");
        props.refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card className="mt-3">
        <Card.Header
          as="h5"
          className="bg-primary text-white font-weight-normal"
        >
          Say Something...
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Create a Post"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
              />
              <div className="mt-2">
                <Dropdown
                  onSelect={(e) => {
                    setCategory(e);
                  }}
                >
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    {category}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="Tech">Tech</Dropdown.Item>
                    <Dropdown.Item eventKey="Science">Science</Dropdown.Item>
                    <Dropdown.Item eventKey="Entertainment">
                      Entertainment
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Form.Group>
            <div className="d-flex justify-content-end align-items-center">
              <Button variant="success" type="submit" onClick={handleSubmit}>
                Create Post
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default CreatePost;
