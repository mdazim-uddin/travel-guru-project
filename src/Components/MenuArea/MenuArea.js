import React, { useContext } from 'react';
import {Container, Row,Col} from 'react-bootstrap'
import logo from '../../Image/logo.svg'
import { Link } from "react-router-dom";
import { FaAlignRight ,FaSearchLocation} from "react-icons/fa";
import './MenuArea.css'
import { UserContext } from '../../App';
const MenuArea = () => {
const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    return (
        <div className="header-top">
                
              {/* <Container> */}
                <Row>
                    <Col md ={3}>
                        <div className="">
                            <img src={logo} alt=""></img>
                        </div>
                    </Col>
                    <Col md ={6}>
                    <div className="menu-area">
						<div className="menu-icon">
                        <FaAlignRight />
						</div>
						<div  className="main-menu">
						<ul>
						<Link to="/">
                        <li>
							<a>home</a>
						</li>
                        </Link>
						<li>
							<a href="#">Room</a>
						</li>
						<li>
							<a href="#">service</a>
						</li>
						<li>
							<a href="#">protpolio</a>
						</li>
						<li>
							<a href="#">contact</a>
						</li>
              <button   onClick={()=>setLoggedInUser({})}> Sign out</button>
              
					</ul>
				</div>
					</div>

                    </Col>
                    <Col md={3}>
                        <div className="search-box">
              <input className="search-txt" type="text" placeholder="Type to search"></input>
                    <a className="search-btn" href="#">
                        <FaSearchLocation></FaSearchLocation>
                    </a>
                        </div>
                    </Col>
                </Row>
                {/* </Container>   */}
           
        </div>
        
    );
};

export default MenuArea;