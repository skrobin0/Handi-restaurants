import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './MenuGallery.css'
import img1 from '../../../../../Images/gallery1-640x480.jpg'
import img2 from '../../../../../Images/gallery2-640x480.jpg'
import img3 from '../../../../../Images/gallery3-640x480.jpg'
import img4 from '../../../../../Images/gallery4-640x480.jpg'
import img5 from '../../../../../Images/gallery5-640x480.jpg'
import img6 from '../../../../../Images/gallery6-640x480.jpg'

const Gallery = () => {
    return (
        <Container fluid className='mt-5'>
            <Row className="p-5 m-auto g-2 photo-grid">
        <Col md={4}>
          <img className="img-thumbnail" alt=".." src={img1} />
        </Col>
        <Col md={4}>
          <img className="img-thumbnail " alt=".." src={img2} />
        </Col>
        <Col md={4}>
          <img className="img-thumbnail " alt=".." src={img3} />
        </Col>
        <Col md={4}>
          <img className="img-thumbnail " alt=".." src={img4} />
        </Col>
        <Col md={4}>
          <img className="img-thumbnail " alt=".." src={img5} />
        </Col>
        <Col md={4}>
          <img className="img-thumbnail " alt=".." src={img6} />
        </Col>
      </Row>
        </Container>
    );
};

export default Gallery;