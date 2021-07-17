import React from "react";
import Navbar from "./Navbar";
import som from "./img/som.jpeg";
import aditya from "./img/aditya.jpeg";
import rewash from "./img/rewash.jpeg";
import anish from "./img/anish.jpg";
import lavish from "./img/Lavish.jpg";
import { Row, Col, Card } from "react-bootstrap";

function AboutUs() {
  const teamData = [
    {
      img: aditya,
      name: "Aditya Lakandri",
      desc: "Hailing from Darjeeling, West Bengal. Persuing B.tech Computer Science degree from Lovely Professional University, Jalandhar",
    },
    {
      img: som,
      name: "Somesh Kumar Jena",
      desc: "Hailing from Berhampur, Odisha. Persuing B.tech Computer Science degree from Lovely Professional University, Jalandhar",
    },
    {
      img: rewash,
      name: "Rewash Chettri",
      desc: "Hailing from Darjeeling, West Bengal. Persuing B.tech Computer Science degree from Lovely Professional University, Jalandhar",
    },
    {
      img: anish,
      name: "Anish Thappa",
      desc: "Hailing from Darjeeling, West Bengal. Persuing B.tech Computer Science degree from Lovely Professional University, Jalandhar",
    },
    {
      img: lavish,
      name: "Lavish Gupta",
      desc: "Hailing from Amritsar, Punjab. Persuing B.tech Computer Science degree from Lovely Professional University, Jalandhar",
    },
  ];
  const CardComponent = (props) => {
    return (
      <Card className="mb-3">
        <div className="text-center p-3">
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundImage: `url(${props.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-circle m-auto "
          ></div>
        </div>
        <Card.Body className="text-center">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <div>
        <Navbar />
        <br />
        <h1 className="text-center">Our Team</h1>
        <Row className="p-5 d-flex justify-content-center">
          {teamData.map((value, index) => {
            return (
              <Col md={4} key={index}>
                <CardComponent
                  name={value.name}
                  desc={value.desc}
                  image={value.img}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default AboutUs;
