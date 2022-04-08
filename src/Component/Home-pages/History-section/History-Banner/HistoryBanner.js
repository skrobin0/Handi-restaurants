import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import slice from '../../../../Images/slice-pizza.jpg'
import slice2 from '../../../../Images/slice-pizza2.jpg'

const HistoryBanner = () => {
    return (
       <Container fluid>
            <Row className='mt-5 text-center'>
          <Col md={4}>
            <img style={{width:'100%', height:'450px', opacity:'0.8'}} src={slice} alt="" />
          </Col>

          <Col md={8}>
            <img style={{ width: "100%", height:'450px' }} src={slice2} alt="" />
            <div className='text-white' style={{marginTop:'-280px'}}>
            <h1 style={{fontFamily:"cursive",}}>Over 250 Delicious & Tasty
            <br />
            Recipes</h1>
            </div>
            
          </Col>
        </Row>
       </Container>
    );
};

export default HistoryBanner;