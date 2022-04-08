import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import cover1 from "../../../../Images/home-image-1-2.jpg";
import cover2 from "../../../../Images/home-image-1-1.jpg";
import "./History.css";

const History = () => {
  return (
    <div>
      <Container>
        <Row className="text-center mt-5">
          <Col md={6} className="pt-5">
            <h3 style={{fontFamily:'cursive'}}>History of</h3>
            <h1 style={{fontFamily:'cursive'}}>Our Restaurant</h1>
            ____ <i class="fa-solid fa-bahai pb-3"></i> ____
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis <br />
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas <br />
              molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </Col>

          <Col md={6} className="p">
            <img style={{ width: "75%" }} src={cover1} alt="" />
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col md={6} className="p">
            <img style={{ width: "75%" }} src={cover2} alt="" />
          </Col>
          <Col md={6} className="pt-5">
            <h3 style={{fontFamily:'cursive'}}>Delicated</h3>
            <h1 style={{fontFamily:'cursive'}}>Our Services</h1>
            ____ <i class="fa-solid fa-bahai pb-3"></i> ____
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis <br />
              praesentium voluptatum deleniti atque corrupti quos dolores et
              quas <br />
              molestias excepturi sint occaecati cupiditate non provident.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default History;
