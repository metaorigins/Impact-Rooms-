import React from 'react';
import { Container, Image, Row, Col, Button, Carousel, Card, Form } from 'react-bootstrap';
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiDeerTrack, GiSmart, GiMagnifyingGlass, GiAtom } from "react-icons/gi";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { FaGlobeAfrica } from 'react-icons/fa';
import companyMan from '../../assets/companyMan.jpg';
import './Investors.css'

function Investors() {


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
        <h1 className="text-on-imageCompany">Welcome, Investors.</h1>
      </Row>
      <Image src={companyMan} className="photoCompanyMan"></Image>
      <Row>
        <Col>
          <Card style={{ width: '40rem' }}>
            <Card.Body>
              <Card.Title>Hi</Card.Title>
              <br />
              <Card.Text>
                Hi, my name is Esgie.
                <br />
                I am your platform host.
              </Card.Text>
              <br />
              <br />
            </Card.Body>
            <Card.Footer>
              <Button variant="primary">Start</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <ColoredLine color="#277C93" />
          <br />
          <h4>Our investor dashboard will launch in April 2022</h4>
          <br />
          Register now and receive AI matched and fully evaluated deals to your inbox
          <br />
          <br/>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>
      <br />
      <br />

      <Row className="justify-content-md-center">
        <Col xs={4}>
          <h4>What Will The Platform Do?</h4>
        </Col>
      </Row>
      <br />
      <br />


      <Row>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <AiOutlineCheckCircle />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Evaluated Deals</h4>
          <br />
          Receive AI matched and fully evaluated deal opportunities from our Enterprise Escalator
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiDeerTrack />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Follow-on Funding</h4>
          <br />
          Onboard and track your Portfolio in the Escalator to find their next funding round
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <BsFillHandThumbsUpFill />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Evaluate Pipeline</h4>
          <br />
          Onboard and track your Portfolio in the Escalator to find their next funding round
        </Col>
      </Row>
      <br />
      <br />


      <Row>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <BsFillHandThumbsUpFill />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Market Insights</h4>
          <br />
          Receive AI driven insights across 1000s of company and market data points
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiMagnifyingGlass />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Track Prospects</h4>
          <br />
          Identify, save and track evaluated company prospects as they progress and grow
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiSmart />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Smart Fund</h4>
          <br />
          Coming Q3 2022 – try new markets and syndicate with investors from around the world
        </Col>
      </Row>
      <br />
      <br />

      <Row className="justify-content-md-center">
        <Col xs={3}>
          <h3>Is this relevant for me?</h3>
        </Col>
      </Row>
      <br />
      <br />


      <Row>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiSmart />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Across Stages</h4>
          <br />
          We work with companies at all stages of growth, from ideation to maturity, and Angel to IPO
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiAtom />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Sector Agnostic</h4>
          <br />
          Our companies are sector agnostic. The only condition is all companies must create a positive-impact
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiSmart />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Investment Type</h4>
          <br />
          Our companies love all types of investment, from traditional equity and debt to DeFi and RBF
        </Col>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <FaGlobeAfrica />
            </IconContext.Provider>
          </div>
          <br />
          <h4>Africa Focussed</h4>
          <br />
          All of our companies are Africa focussed. That means they can be registered around the world
        </Col>
      </Row>
      <br/>
      <br/>
      <br/>
      <br/>

      <Row>
        <Col><h3>Are you eligible?</h3></Col>
      </Row>
      <br/>

      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="orange" />
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
          <ColoredLine color="orange" />
        </Col>
      </Row>
      <br/>

      






    </Container>
  );
}

export default Investors;