import React from 'react';
import { Col } from 'react-bootstrap';
import {Link } from 'react-router-dom'
import { FaFacebookF } from 'react-icons/fa';
import './travel.css'
const Travel = (props) => {
const {title,paragrap,image,id}=props.travel
    return (
              <Col md={4}>
                  <div  className="travel-area">
                  <div className="tem-area">
        <div className="tem-member">
        <img src={image} className="img-fluid"/>
        <div className="teem-overlay">
          <ul>
          <li><a href="#"><FaFacebookF></FaFacebookF></a></li>
          </ul>
        </div>
        </div>
        <div class="teem-member-info">
          <h3>{title}</h3>
          <span>{paragrap}</span>
 					</div>
        
        </div>
        <Link to={`/travelDetails/${id}`}>
        <div className="banner-text">
        <button>Book Now</button>
        </div>
        </Link>
         </div>
  
        </Col>
    );
};

export default Travel;