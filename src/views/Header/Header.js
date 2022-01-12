import React from 'react';
import { Navbar, Nav, Container, Button, Image } from 'react-bootstrap';
import logo from '../../assets/Asset 1.png';
import './Header.css';
import clsx from "clsx";

function Header() {

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="/"><Image src={logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={clsx("justify-content-end", 'fontType2')}>
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Companies">Companies</Nav.Link>
                        <Nav.Link href="/Investors">Investors</Nav.Link>
                        <Nav.Link href="/AboutUs">About Us</Nav.Link>
                        <Button variant="info" className='buttonStyleHeader'>Sign In</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}

export default Header;