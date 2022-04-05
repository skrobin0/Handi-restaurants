import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import center from "../../../../Images/center-img2.jpg";
import './ParticularSection.css'
const ParticularSection = () => {
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Row className="mt-5">
              <Col md={8} className='my-2'>
                <i class="text-success fa-2x fa-solid fa-bread-slice mb-2"></i>
                <h5>Salubrious Snacks</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incid iduntus ut
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={8} className='my-2'>
              <i class="text-success fa-2x fa-solid fa-champagne-glasses mb-2"></i>
                <h5>Healthy Drinks</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incid iduntus ut
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={8} className='my-2'>
              <i class="text-success fa-2x fa-solid fa-jar mb-2"></i>
                <h5>Chocolate Desserts</h5>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incid iduntus ut
                </p>
              </Col>
            </Row>
          </Col>
          <Col md={4}>
            <img src={center} alt="" />
          </Col>
          <Col md={4}>
            <Row className="mt-5">
              <Col md={8} className='my-2 ms-2'>
              <i class="text-success fa-2x fa-solid fa-wine-glass mb-2"></i>
                <h5>Hot Spirits</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incid iduntus ut
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={8} className='my-2 ms-2'>
              <i class="text-success fa-2x fa-solid fa-box-open mb-2"></i>
                <h5>Packaged Foods</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incid iduntus ut
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={8} className='my-2 ms-2'>
              <i class="text-success fa-2x fa-solid fa-drumstick-bite mb-2"></i>
                <h5>Spicy Stuff</h5>
                 <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incid iduntus ut
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ParticularSection;
