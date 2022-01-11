import React from 'react';
import { Container, Image, Row, Col, Card, Button, Nav, Carousel } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import Typewriter from "typewriter-effect";
import { IconContext } from "react-icons";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill} from "react-icons/bs";
import vr from '../../assets/vr.jpg';
import aws from '../../assets/homePage/AWS.jpeg';
import gbv from "../../assets/homePage/gbv.jpeg";
import shortlist from "../../assets/homePage/Shortlist.png";
import picture8 from "../../assets/homePage/Picture8.jpeg";
import nexus from "../../assets/homePage/Impact-nexus.png";
import innovesta from "../../assets/homePage/Innovesta.png";
import './HomePage.css';
import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";


SwiperCore.use([Pagination]);


function HomePage() {


    const ColoredLine = ({ color }) => (
        <hr
            style={{
                color,
                height: 5,
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
            <Image src={vr} className={clsx("photo")}/>
       

            <Row className="mx-auto my-4">
                <Col>
                    <ColoredLine color="#277C93" />
                    <br />
                    <br />
                    <h4 className="center">Enabling African entrepreneurship at scale  through technology, data and collaboration.</h4>
                    <br />
                    <br />
                    <br />
                    <ColoredLine color="#277C93" />
                </Col>
                <Col>
                    <Card border="primary" className={clsx("center", "shadow-lg")}>
                        <Card.Header><Card.Title>Create Your FREE Company Dashboard</Card.Title></Card.Header>
                        <Card.Body>
                            <br />
                            <Button variant="primary" size="lg">Let's Get Started</Button>
                            <br />
                            <br />
                            <br />
                            <Card.Text>
                                Grow your business, evaluate your progress, earn rewards, match with investors and much more, from ideation to maturity.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className="mx-auto my-4">
                <Col>
                    <Card className={clsx("center", "shadow-lg")}>
                        <br/>
                        <Card.Body>
                            <IconContext.Provider value={{ color: "#277C93", size: "50px" }}>
                                <BsFillArrowLeftCircleFill/>
                            </IconContext.Provider>
                            <br/>
                            <br/>
                            <Card.Title><Nav.Link href="/Investors"><h2>Investors</h2></Nav.Link></Card.Title>
                            <br />
                            <ColoredLine color="#277C93" />
                            <br/>
                            <Card.Text>
                            <h5>Accredited and institutional investors interested <br/> or active in Africa</h5>
                            </Card.Text>
                            <br/>
                            <ColoredLine color="#277C93" />
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={clsx("center", "shadow-lg")}>
                        <br/>
                        <Card.Body>
                        <IconContext.Provider value={{ color: "#277C93", size: "50px" }}>
                                <BsFillArrowRightCircleFill/>
                            </IconContext.Provider>
                            <br/>
                            <br/>
                            <Card.Title> <Nav.Link href="/Companies"><h2>Companies</h2></Nav.Link></Card.Title>
                            <br />
                            <ColoredLine color="#277C93" />
                            <br/>
                            <Card.Text>
                                <h5>Africa focussed enterprises at any stage looking to grow or raise investment</h5>
                            </Card.Text>
                            <br/>
                            <ColoredLine color="#277C93" />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <br />

            <Row className="justify-content-md-center">
                <Col>
                    <Swiper grabCursor={true} loop={true} height={100} slidesPerView={2} spaceBetween={30} pagination={{
                    }} className="align-middle">
                        <SwiperSlide>
                            <Image className="swiper-image" src={aws} roundedCircle={true} />
                            <br />
                            <br />
                            Impact Rooms partners with AWS to bring infrastructure, resources and access to African start ups.	Announcement December 2021
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="swiper-image" src={gbv} roundedCircle={true} />
                            <br />
                            <br />
                            Impact Rooms raises seven-digit growth capital from US based investment group - Global Blockchain Ventures AnnouncementDecember 2021
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="swiper-image" src={shortlist} roundedCircle={true} />
                            <br />
                            <br />
                            Impact Rooms partners with renowned recruitment and executive search firm - Shortlist - to bring top-talent to African start ups. AnnouncementNovember 2021
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="swiper-image" src={picture8} roundedCircle={true} />
                            <br />
                            <br />
                            Impact Rooms announces Barry Palte as company Chairperson - bringing world-class investment experience to the team AnnouncementDecember 2021
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="swiper-image" src={nexus} roundedCircle={true} />
                            <br />
                            <br />
                            Impact Rooms partners with Germany based, Impact Nexus, to evaluate, score and forecast the impact of companies AnnouncementNovember 2021
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="swiper-image" src={innovesta} roundedCircle={true} />
                            <br />
                            <br />
                            Impact Rooms partners with Israeli based, Innovesta, to bring clients real-time market updates and sentiment AnnouncementDecember 2021
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
            <br />
            <br />

            <Row className="justify-content-md-center">
                <Col xs={10}>
                    <ColoredLine color="#277C93" />
                </Col>
            </Row>
            <br />
            <br />
            <Row className="justify-content-md-center">
                <Col>
                    <h2 className="center">Prepare. Grow. Succeed.</h2>
                </Col>
            </Row>
            <br />
            <Row className="justify-content-md-center">
                <Col xs={10}>
                    <ColoredLine color="#277C93" />
                </Col>
            </Row>
            <br/>

        </Container>
    )
}

export default HomePage;