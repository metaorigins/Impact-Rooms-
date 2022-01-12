import React from 'react';
import { Container, Image, Row, Col, Button, Carousel, Card, Form } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from 'swiper';
import { GiAtom, GiMagnifyingGlass, GiTrophyCup, GiDeerTrack, GiSmart, GiLotus } from 'react-icons/gi';
import { FaPuzzlePiece, FaCogs, FaGlobeAfrica } from 'react-icons/fa';
import { RiShieldStarFill, RiHeartPulseFill, RiZoomInFill } from 'react-icons/ri';
import { IoIosInfinite } from 'react-icons/io';
import { IconContext } from "react-icons";
import companyMan from '../../assets/companyMan.jpg';
import dashboard from '../../assets/Main Dashboard.png';
import joe from "../../assets/firstPerson.jpeg";
import andreas from "../../assets/secondPerson.jpeg";
import robin from "../../assets/thirdPerson.jpeg";
import investor from "../../assets/fourthPerson.jpeg"
import './Companies.css';
import "swiper/css";
import "swiper/css/pagination";
import clsx from "clsx";

SwiperCore.use([Pagination]);




function Companies() {
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color,
        backgroundColor: color,
        height: 5
      }}
    />
  );

  function open() {
    window.open('mailto:info@impactrooms.com?subject=Subject')
  }

  return (
    <Container fluid className="p-0">
      <Row>
        <h1 className="text-on-imageCompany">Welcome, Companies.</h1>
      </Row>
      <Image src={companyMan} className="photoCompanyMan"></Image>
      <Row>
        <Col className="row">
          <Image src={dashboard} className={clsx("block-example border border-primary", "shadow-lg p-3 mb-5 bg-white rounded")}></Image>
          <p className='fontType'>*Company dashboards are currently unavailable for mobile users</p>
        </Col>
        <Col className="center">
          <p className={clsx('content1', 'fontType')}>Create your FREE company dashboard</p>
          <Button variant="primary">Let's Get Started</Button>
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col xs={10}>
              <ColoredLine color="#277C93" />
            </Col>
          </Row>
          <p className={clsx('content1', 'fontType')}>Get notified on launch in March 2022</p>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col>
          <Swiper grabCursor={true} centeredSlides={true} loop={true} height={100} spaceBetween={30} pagination={{
          }} className={clsx("align-middle", 'fontType')} >
            <SwiperSlide>
              "Amazing! We are very excited to work together, even for consecutive raises"
              <br />
              <br />
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "300px",
                paddingRight: "20px",
              }}>
                <Image src={joe} roundedCircle={true} />
                <br />
                Joe
                <br />
                Founder, CEO
              </div>
            </SwiperSlide>
            <SwiperSlide>
              "Amazing! What a great, profound, deep, insightful analysis"
              <br />
              <br />
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "300px",
                paddingRight: "20px",
              }}>
                <Image className="swiper-image" src={andreas} roundedCircle={true} />
                Andreas
                <br />
                Founder, Chairperson
              </div>

            </SwiperSlide>
            <SwiperSlide>
              "Honestly, it's amazing, very useful!"
              <br />
              <br />
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "300px",
                paddingRight: "20px",
              }}>
                <Image className="swiper-image" src={robin} roundedCircle={true} />
                Robin
                <br />
                Founder
              </div>
            </SwiperSlide>
            <SwiperSlide>
              "The shortlist is just brilliant. Relevant and transparent."
              <br />
              <br />
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "300px",
                paddingRight: "20px",
              }}>
                <Image className="swiper-image" src={investor} roundedCircle={true} />
                Investor
                <br />
                Managing Partner
              </div>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
      <br />
      <br />
      <br />

      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>
      <br />


      <Row className={clsx("centerCompany", 'fontType')}>
        <h5>Join the Enterprise Escalator and take your company all the way!</h5>
      </Row>
      <br />
      <br />


      <Row className={clsx("centerCompany", 'fontType')}>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiAtom />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Smart Evaluation</h3>
          <br />
          Our smart evaluation uses logic to understand and improve each area of your business
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <FaPuzzlePiece />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Investor Readiness</h3>
          <br />
          Receive personalised recommendations throughout your evaluation

        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiMagnifyingGlass />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Find Investors</h3>
          <br />
          Our data-centre uses AI driven matching to produce a hyper relevant investor shortlist
        </Col>
      </Row>
      <br />
      <br />

      <Row className={clsx("centerCompany", 'fontType')}>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiTrophyCup />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Earn Rewards</h3>

          Earn tokens and incentives to save you money and improve your business
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <FaCogs />
            </IconContext.Provider>
          </div>
          <br />
          <h3> Training Resources</h3>

          Get recommended or download learning resources across all business areas
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <RiShieldStarFill />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Access Services </h3>

          Get automatically introduced to our vetted partners across law, talent, finance and more
        </Col>
      </Row>
      <br />
      <br />

      <Row className={clsx("centerCompany", 'fontType')}>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiDeerTrack />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Market Tracking</h3>

          Receive relevant and real-time market updates to stay ahead of your competition
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <RiHeartPulseFill />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Measure Impact</h3>

          Evaluate, score, forecast and improve your company’s positive impact
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiSmart />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Smart Fund</h3>

          Launching H2 2022 – get investment for your progress through the Escalator
        </Col>
      </Row>
      <br />
      <br />
      <br />

      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>
      <br />
      <br />
      <Row className={clsx("justify-content-md-center", 'fontType')}>
        <Col xs={2}>
          <h2>Our Criteria</h2>
        </Col>
      </Row>
      <br />
      <br />

      <Row className={clsx("centerCompany", 'fontType', 'fontBlue')}>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#808080", size: "40px" }}>
              <FaGlobeAfrica />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Africa Focussed</h3>
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#808080", size: "40px" }}>
              <IoIosInfinite />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Stage & Sector Agnostic</h3>
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#808080", size: "40px" }}>
              <GiLotus />
            </IconContext.Provider>
          </div>
          <br />
          <h3>Positively Impactful</h3>
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
      <Row className={clsx("center", 'fontType')}>
        <Col>
          <Button variant="outline-primary" onClick={open}>Contact Us</Button>
        </Col>
      </Row>
      <br />
      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>
      <br />
    </Container>
  );
}

export default Companies;
