import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./StunningThings.css";

const StunningThings = () => {
  return (
    <div>
      <Container>
        <Row className="text-center mt-5">
          <Col md={12} className="pt-5">
            <h3 style={{fontFamily:'cursive'}}>For your comfort</h3>
            <h1 style={{fontFamily:'cursive'}}>Stunning Things</h1>
            ____ <i class="fa-brands fa-accusoft"></i> ____
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col md={4}>
            <Card style={{ width: "23rem", height: "16rem" }}>
              <Card.Body>
                <i class="text-success fa-3x fa-solid fa-bowl-rice pt-4"></i>
                <Card.Title className="py-3">High Quality Foods</Card.Title>
                <Card.Text>
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae.
                  Vivamus maximus scelerisque ipsum nec commodto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "23rem", height: "16rem" }}>
              <Card.Body>
                <i class="text-success fa-3x fa-solid fa-martini-glass-citrus pt-4"></i>
                <Card.Title className="py-3">Inspiring Recipes</Card.Title>
                <Card.Text>
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae.
                  Vivamus maximus scelerisque ipsum nec commodto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "23rem", height: "16rem" }}>
              <Card.Body>
                <i class="text-success fa-3x fa-solid fa-fish-fins pt-4"></i>
                <Card.Title className="py-3">Salutary Meals</Card.Title>
                <Card.Text>
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae.
                  Vivamus maximus scelerisque ipsum nec commodto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="text-center mt-5">
          <Col md={4}>
            <Card style={{ width: "23rem", height: "16rem" }}>
              <Card.Body>
                <i class="text-success fa-3x fa-solid fa-staff-aesculapius pt-4"></i>
                <Card.Title className="py-3">Veteran Staff</Card.Title>
                <Card.Text>
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae.
                  Vivamus maximus scelerisque ipsum nec commodto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "23rem", height: "16rem" }}>
              <Card.Body>
                <i class="text-success fa-3x fa-brands fa-the-red-yeti pt-4"></i>
                <Card.Title className="py-3">Pristine Ingredients</Card.Title>
                <Card.Text>
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae.
                  Vivamus maximus scelerisque ipsum nec commodto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card style={{ width: "23rem", height: "16rem" }}>
              <Card.Body>
                <i class="text-success fa-3x fa-solid fa-truck-ramp-box pt-4"></i>
                <Card.Title className="py-3">Express Delivery</Card.Title>
                <Card.Text>
                  Etiam feugiat eleifend est, sed luctus odio tempor vitae.
                  Vivamus maximus scelerisque ipsum nec commodto.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StunningThings;
