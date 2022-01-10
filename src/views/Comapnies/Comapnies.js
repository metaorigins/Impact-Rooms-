import React from 'react';
import { Container, Image, Row, Col, Button, Carousel, Card, Form } from 'react-bootstrap';
import { GiAtom, GiMagnifyingGlass, GiTrophyCup, GiDeerTrack, GiSmart, GiLotus } from 'react-icons/gi';
import { FaPuzzlePiece, FaCogs } from 'react-icons/fa';
import { RiShieldStarFill, RiHeartPulseFill, RiZoomInFill } from 'react-icons/ri';
import { IoIosInfinite } from 'react-icons/io';
import { IconContext } from "react-icons";
import companyMan from '../../assets/companyMan.jpg';
import dashboard from '../../assets/previous.png';
import './Companies.css';

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

  return (
    <Container fluid className="p-0">
       <Row>
        <h1 className="text-on-imageCompany">Welcome, Companies.</h1>
      </Row>
      <Image src={companyMan} className="photoCompanyMan"></Image>
      <Row>
        <Col className="row">
          <Image src={dashboard} className="photoDashboard"></Image>
          <p>*Company dashboards are currently unavailable for mobile users</p>
        </Col>
        <Col>
          <p className='content1'>Create your FREE company dashboard</p>
          <br/>
          <Button variant="primary">Let's Get Started</Button>
          <p className='content1'>Get notified on launch in March 2022</p>
        </Col>
      </Row>

      <Row className="mx-auto my-4">
        <Col>
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

      <Row>
        <p className="content1">Join the Enterprise Escalator and take your company all the way!</p>
      </Row>


      <Row className="justify-content-md-center">
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
      <Row>
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

      <Row>
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
      <br/>
      <br/>

      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>
      <br />
      <br />
      <Row className="justify-content-md-center">
        <Col xs={2}>
          <h2>Our Criteria</h2>
        </Col>
      </Row>
      <br />
      <br />

      <Row>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <RiZoomInFill />
            </IconContext.Provider>
          </div>
          <br />
          <h2>Africa Focussed</h2>
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <IoIosInfinite />
            </IconContext.Provider>
          </div>
          <br />
          <h2>Stage & Sector Agnostic</h2>
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiLotus/>
            </IconContext.Provider>
          </div>
          <br />
          <h2>Positively Impactful</h2>
        </Col>
      </Row>
      <br/>
      <br/>

      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>
      <br />
      <br />
      <Row className="justify-content-md-center">
        <Col xs={2}>
          <Button variant="secondary">Contact Us</Button>
        </Col>
      </Row>
      <br/>
      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>
      <br/>
    </Container>
  );
}

export default Companies;
