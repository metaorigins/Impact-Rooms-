import React, { useState } from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import logo from '../../assets/Asset 1.png';
import './Header.css'

function Header() {

    return (
        <Navbar >
            <Container fluid>
                <Navbar.Brand href="/"><Image src={logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/Companies">Companies</Nav.Link>
                    <Nav.Link href="/Investors">Investors</Nav.Link>
                    <Nav.Link href="/AboutUs">About Us</Nav.Link>
                    <Button variant="primary">Sign In</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;