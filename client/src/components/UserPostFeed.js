import React, { useState } from "react";
import Navbar from "./Navbar";
import CreatePost from "./CreatePost";
import PostFeed from "./Posts/PostFeed";
import { Container } from "react-bootstrap";

function UserPostFeed() {
  const [refresh, setRefresh] = useState(1);

  return (
    <>
      <Navbar />
      <Container>
        <CreatePost refresh={() => setRefresh(refresh + 1)} />
        <PostFeed refreshId={refresh} refresh={() => setRefresh(refresh + 1)} />
      </Container>
    </>
  );
}

export default UserPostFeed;
