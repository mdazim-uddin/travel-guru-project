import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import banner from '../../Image/defaultBcg.jpeg';
import fakePlace from '../../fakePlace';
import Travel from '../Travel/Travel';
import './Banner.css'
const Banner = () => {
const [travel,setTravel]=useState(fakePlace)
    return (
        <div style={{ backgroundImage: ` url(${banner})` }} className="banner-area">
            <Container>
                <Row>
                    {
                 travel.map(travel=><Travel travel={travel}></Travel>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Banner;