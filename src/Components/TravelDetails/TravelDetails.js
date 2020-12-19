import React from 'react';
import {Link, useParams } from 'react-router-dom';
import fakePlace from '../../fakePlace';
import { Container,Row,Col } from 'react-bootstrap';
import './TravelDetail.css'
const TravelDetails = () => {
const {travelId}=useParams()
const travel = fakePlace.find(e=>e.id==travelId)
    return (
        <div className="Travel">
        <Container>
         <Row>
         <Col md={6}>
              <div className="Travel-text">
               <h2>{travel.title}</h2>
              <p>{travel.paragrap}</p>
          
          
        </div>
       </Col>
       <Col md={6}>
          <div className="form">
          <div className="input">
          <label for="name">Origin</label>
          <input type="text" id="name" class="form-control" value="Dhaka"/>
          <label for="name">Origin</label>
          <input type="text" id="name" class="form-control" value="Sundarban"/>

          
         <div className="azim">
         <div className="fo">
          <label for="name">Form</label>
          <br></br>
          <input type="date" id="name" value="2017-05-24"/>
          </div>
          
          <div className="To">
         
          <label for="name">To</label>
          <br></br>
          <input type="date" id="name"  value="2017-05-24"/>
          </div>
         </div>
          
          </div>
          </div>
          <div className="button">
            <Link to="/shop">
          <button >Start booking</button>
          </Link>
          </div>
          </Col>
          
          </Row>
         </Container>
      </div>
    );
};

export default TravelDetails;