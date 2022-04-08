import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Food = ({ food }) => {
  const { id, title, image, description } = food;
  return (
    <div>
      <Card>
        <Card className="img-card">
          <Card.Img variant="top p-5" src={image} />
        </Card>
        <Card.Body className="text-center">
          <Card.Title className="text-success">
            <h3>{title}</h3>
          </Card.Title>
          <Card.Text>
            <p className="card-text mt-3">{description.slice(0, 90)}...</p>
          </Card.Text>
          <Link to={`/singleFood/${id}`}>
            <Button className="btn btn-success">Order Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Food;
