import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gallery from "./MenuGallery/Gallery";

const SeasonalMenus = () => {
  return (
    <Container fluid>
      <Row className="mt-3">
        <Col
          className="text-center mt-5"
          md={4}
          style={{ backgroundColor: "rgb(244,241,234)", paddingTop: "120px" }}
        >
          <h4>Embracing </h4>
          <h2>Seasonal Menus</h2>
          ___________

          <p className="pt-3">
            At vero eos et accusamus et iusto odio <br /> dignissimos ducimus
            qui blanditiis <br />
            praesentium voluptatum deleniti atque <br /> corrupti quos dolores
            et quas molestias <br /> excepturi sint occaecati cupiditate non{" "}
            <br /> provident.
          </p>
        </Col>
        <Col md={8}>
            <Gallery></Gallery>
        </Col>
      </Row>
    </Container>
  );
};

export default SeasonalMenus;
