import React from 'react';
import { Container, Image, Row, Col, Button, Card, Accordion } from 'react-bootstrap';
import { Helmet } from "react-helmet";
import { Widget } from '@typeform/embed-react';
import { IconContext } from "react-icons";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { GiDeerTrack, GiSmart, GiMagnifyingGlass, GiAtom, GiStairsGoal } from "react-icons/gi";
import { BsFillHandThumbsUpFill, BsFillStopwatchFill } from "react-icons/bs";
import { FaGlobeAfrica } from 'react-icons/fa';
import companyMan from '../../assets/companyMan.jpg';
import wave from "../../assets/simle_emoji.png";
import './Investors.css';
import clsx from "clsx";

function Investors() {

  function open() {
    window.open('mailto:info@impactrooms.com?subject=Subject')
  }

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
          <Helmet>
        <title>Investors</title>
      </Helmet>
      <Row className="fontType">
        <h1 className="text-on-imageCompany">Welcome, Investors.</h1>
      </Row>
      <Image src={companyMan} className="photoCompanyMan"></Image>
      <Row>
        <Col>
            <Widget id="pTsv18tb" style={{ width: '100%', height: '180%' }} className="my-form" />
        </Col>
        <Col className={clsx('fontType', 'center', 'paddingTop')}>
          <Row className="justify-content-md-center">
            <Col xs={11}>
              <ColoredLine color="#277C93" />
            </Col>
          </Row>
          <br />
          <h5>Our investor dashboard will launch in April 2022</h5>
          <br />
          Register now and receive AI matched and fully evaluated deals to your inbox
          <br />
          <br />
          <Row className="justify-content-md-center">
            <Col xs={11}>
              <ColoredLine color="#277C93" />
            </Col>
          </Row>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    


      <Row className="justify-content-md-center">
        <Col className={clsx("center", 'fontType')}>
          <h4>What Will The Platform Do?</h4>
        </Col>
      </Row>
      <br />
      <br />


      <Row className={clsx("centerInvestor", 'fontType')}>
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
      <br />
      <br />


      <Row className={clsx("centerInvestor", 'fontType')}>
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
          Coming Q3 2022 ??? try new markets and syndicate with investors from around the world
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Row className={clsx("justify-content-md-center", 'fontType')}>
        <Col xs={3}>
          <h3>Is this relevant for me?</h3>
        </Col>
      </Row>
      <br />
      <br />


      <Row className={clsx("centerInvestor", 'fontType')}>
        <Col>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <IconContext.Provider value={{ color: "#277C93", size: "40px" }}>
              <GiStairsGoal />
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
      <br />
      <br />
      <br />
      <br />

      <Row className={clsx("accordion", 'fontType')}>
        <Col>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Are you eligible?</Accordion.Header>
              <Accordion.Body>
                We accept applications from accredited individuals, high-net-worth individuals (???HNIs???), Angel Investors, Family Offices, development finance institutions (???DFIs???), private, public and cryptocurrency funds, and any other retail or institutional entities that are actively investing or interested in investing in Africa.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </Col>
      </Row>
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
      <br />

    </Container>
  );
}

export default Investors;