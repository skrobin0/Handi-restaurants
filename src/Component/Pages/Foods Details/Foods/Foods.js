import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Food from "../Food/Food";
import Menubar from '../../../Shared/Menubar/Menubar'

const Foods = () => {
  const [foods, setFoods] = useState([]);

  const url = `https://hidden-escarpment-63235.herokuapp.com/foods`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  if (foods.length === 0) {
    return (
      <div class="text-center">
        <Spinner animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
    <Menubar></Menubar>
    <Container fluid className="p-5">
      <Row>
        <Col className="text-center">
          <h1 style={{fontFamily:'cursive'}}>
            <i className="fa-solid fa-utensils pe-2"></i>
            Order Your Favourite Dish
            <i className=" fa-solid fa-utensils ps-2"></i>
          </h1>
        </Col>
      </Row>

      <Row>
        {foods.map((food) => (
          <Col className="g-4 mb-3" md={4}>
            <Food key={food.id} food={food}></Food>
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Foods;
