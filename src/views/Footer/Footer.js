import React from "react";
import logo from '../../assets/Asset_final.png'
import { Box } from "./FooterStyles";
import { Row, Col, Form, Image, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import './Footer.css'

const Footer = () => {
    return (
        <Box>
            <Container>
                <Row className='fontType2'>
                    <Col md={4}>
                        <Nav.Link href="/"><Image src={logo} className="photoFooter"></Image></Nav.Link>
                        <br />
                        <Form.Control type="name" placeholder="Type & Hit Enter..." />
                        <br />
                        <a href="https://twitter.com/ImpactRooms?s=08" className="twitter social">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a
                            href="https://www.facebook.com/impactroomsafrica/"
                            className="facebook social"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/impact-rooms/"
                            className="linkdin social"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a
                            href="https://www.instagram.com/impactrooms/"
                            className="instagram social"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Companies">Company</Nav.Link>
                        <Nav.Link href="/Investors">Investors</Nav.Link>
                        <Nav.Link href="/AboutUs">About Us</Nav.Link>
                        <Button href="/SignIn" variant="info" className='buttonStyleFooter'>Sign In</Button>
                    </Col>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;