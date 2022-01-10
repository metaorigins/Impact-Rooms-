import React from 'react';
import { Container, Image, Row, Col, Card, Button, Nav, Carousel } from 'react-bootstrap';
import Typewriter from "typewriter-effect";
import nature from '../../assets/vr.jpg'
import './HomePage.css'

function HomePage() {

    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color,
                backgroundColor: color,
                height: 5
            }}
        />
    );


    return (
        <Container fluid className="p-0">
            <Row>
                <div className="text-on-image">
                    <Typewriter
                        options={{
                            strings: ['Prepare. Grow. Succeed'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <h2 className="text-on-image2">Enterprise Escalator</h2>
            </Row>
            <Image src={nature} className="photo"></Image>

            <Row className="mx-auto my-4">
                <Col>
                    Enabling African entrepreneurship at scale  through technology, data and collaboration.
                </Col>
                <Col>
                    <Card style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title>Create Your FREE Company Dashboard</Card.Title>
                            <br />
                            <Button variant="primary">Let's Get Started</Button>
                            <br />
                            <br />
                            <br />
                            <Card.Text>
                                Accredited and institutional investors interested or active in Africa
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className="mx-auto my-4">
                <Col>
                    <Card style={{ width: '40rem' }} >
                        <Card.Body>
                            <Card.Title> <Nav.Link href="#home">Investors</Nav.Link></Card.Title>
                            <br />
                            <Card.Text>
                                Grow your business, evaluate your progress, earn rewards, match with investors and much more, from ideation to maturity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '40rem' }} >
                        <Card.Body>
                            <Card.Title> <Nav.Link href="#home">Companies</Nav.Link></Card.Title>
                            <br />
                            <Card.Text>
                                Africa focussed enterprises at any stage looking to grow or raise investment
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col xs={3}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-40"
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
                                alt="Image One"
                            />
                            <Carousel.Caption>
                                <h3>Label for first slide</h3>
                                <p>Sample Text for Image One</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-40"
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
                                alt="Image Two"
                            />
                            <Carousel.Caption>
                                <h3>Label for second slide</h3>
                                <p>Sample Text for Image Two</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col xs={10}>
                    <ColoredLine color="#277C93" />
                </Col>
            </Row>
            <br />
            <br />
            <Row className="justify-content-md-center">
                <Col xs={4}>
                    <h2>Prepare. Grow. Succeed.</h2>
                </Col>
            </Row>
            <br/>
            <Row className="justify-content-md-center">
                <Col xs={10}>
                    <ColoredLine color="#277C93" />
                </Col>
            </Row>

        </Container>
    )
}

export default HomePage;