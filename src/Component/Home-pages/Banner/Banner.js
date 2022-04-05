import React from "react";
import './Banner.css'
import { Carousel } from "react-bootstrap";
import img1 from '../../../Images/slider1.jpg'
import img2 from '../../../Images/slider2.jpg'
import img3 from '../../../Images/Banner3.jpg'
const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item >
          <img
            className="d-block caro"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
          <div className="cap">
            <h1>Taste the difference</h1>
            <p>
             Fine & Delicious Food
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  caro"
            src={img2}
            alt="Second slide"
          />

          <Carousel.Caption>
          <div className="cap">
            <h1>Experience the grand setting</h1>
            <p>
              The Celebrated Cuisine Of
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  caro"
            src={img3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className="cap">
            <h1>Celebrate</h1>
            <p>
              Local & Seasonal Food
            </p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
