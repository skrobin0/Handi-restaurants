import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const SingleFoodDetails = () => {
  const { id } = useParams();

  const [singleFood, setSingleFood] = useState([]);
  

  const url = `http://localhost:5000/foods`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSingleFood(data));
  }, []);

  const Food = singleFood.find((dt) => dt?.id == id);

  const [num, setNum] = useState(1);

  let incNum = () => {
    setNum(Number(num) + 1);
  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

 

  return (
    <div>
         <Row className="mx-auto text-center">
        <Col md={6}>
          <div className="cart p-3 m-2 border border">
            <div className="service img">
              <img style={{ width: "60%" }} src={Food?.image} alt="category" />
            </div>
            <h6 className="mt-4 text-info">Teacher :{Food?.title}</h6>
            <p className="mt-2">{Food?.description}</p>
            <p className="mt-2">{Food?.price *num}</p>
          </div>
          <Button
            
            onClick={decNum}
          >
            -
          </Button>
          <input
            type="text"
            class="form-control text-center"
            value={num}
            onChange={handleChange}
          />
          <Button
            
            onClick={incNum}
          >
            +
          </Button>
          
            
        </Col>
      </Row>
    </div>
    
  );
};

export default SingleFoodDetails;
