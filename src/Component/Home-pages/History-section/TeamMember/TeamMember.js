import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import team1 from "../../../../Images/team1.jpg";
import team2 from "../../../../Images/team2.jpg";
import team3 from "../../../../Images/team3.jpg";
import "./TeamMember.css";

const TeamMember = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center pt-5">
          <h3>Talent and Experience</h3>
          <h4>Team Members</h4>
          ____ <i class="fa-brands fa-accusoft pb-5"></i> ____
        </Col>
      </Row>
      <Row style={{marginLeft:'15px'}} className="pb-5 mb-5 text-center g-5">
        <Col md={4}>
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top tt" src={team1} />
            <Card.Body>
              <Card.Title> </Card.Title>
              <Card.Text>
               <h5>MARC COPPOLO</h5>
               <p>Head Of Chef</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card style={{ width: "20rem" }}>
            <Card.Img variant="top tt" src={team2} />
            <Card.Body>
              <Card.Title> </Card.Title>
              <Card.Text>
                <h5>MARY SANDRA</h5>
                <p>Executive Chef</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card style={{ width: "20rem" }}>
            <Card.Img variant="top tt" src={team3} />
            <Card.Body>
              <Card.Title> </Card.Title>
              <Card.Text>
                <h5>LOHAN CRAIG</h5>
                <p>Decoration Chef</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TeamMember;
