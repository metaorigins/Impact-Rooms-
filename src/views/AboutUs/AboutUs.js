import React from 'react';
import { Container, Image, Row, Col, Button, Card } from 'react-bootstrap';
import companyLady from "../../assets/AboutUs/aboutUsMain.jpg"
import './AboutUs.css';
import OliCard from "../../assets/AboutUs/Oliver-B.png";
import Alex from "../../assets/AboutUs/2-9.png";
import Inonge from "../../assets/AboutUs/1-9.png";
import Barry from "../../assets/AboutUs/Picture8.jpg";
import Oliver from "../../assets/AboutUs/Oliver-K-Pic-3.png";
import Russel from "../../assets/AboutUs/Russel-Pic-1005x1024.png";
import Carol from "../../assets/AboutUs/Carol-1-1024x1011.png";
import Cristine from "../../assets/AboutUs/6-7.png";
import Claire from "../../assets/AboutUs/Claire-1024x1002.png";
import Bedie from "../../assets/AboutUs/2-8.png";
import Lauren from "../../assets/AboutUs/lauren-2-1022x1024.png";
import Emelia from "../../assets/AboutUs/Picture2.png";
import LadyComputer from "../../assets/AboutUs/ladyComputer.jpg";
import acess from "../../assets/AboutUs/1-6.png";
import detail from "../../assets/AboutUs/2-6.png";
import inclusive from "../../assets/AboutUs/3-6.png";
import impact from "../../assets/AboutUs/4-6.png";
import innovate from "../../assets/AboutUs/5-5.png";
import collab from "../../assets/AboutUs/6-5.png"

function AboutUs() {

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
        <h1 className="text-on-image">About Us</h1>
      </Row>
      <Image src={companyLady} className="photoCompany"></Image>
      <br />

      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="orange" />
        </Col>
      </Row>


      <Row className="justify-content-md-center">
        <Col xs={2}>
          <h2>Our Team</h2>
        </Col>
      </Row>
      <br />


      <Row className="justify-content-md-center">
        <Col>
          <p>A highly experienced and diverse team across specialisms, gender, age and geography, who each share a deep passion and knowledge for Africa</p>
        </Col>
      </Row>


      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="orange" />
        </Col>
      </Row>
      <br />


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className="p-0">
            <Card.Img variant="top" src={OliCard} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>OLIVER BLANTERN</Card.Title>
              <Card.Text className='center'>
                Founder & CEO
                <br />
                UK
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={Alex} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>DR. ALEX CAHANA</Card.Title>
              <Card.Text className='center'>
                Chief Information Officer
                <br />
                USA
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={Inonge} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>
                INONGE MARGARET IMASIKU
              </Card.Title>
              <Card.Text className='center'>
                Head of Local Partnerships
                <br />
                Zambia
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" className="card">
            <Card.Img variant="top" src={Barry} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>BARRY PALTE</Card.Title>
              <Card.Text className='center'>
                Chair & Chief Investment Officer
                <br />
                Australia
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className="p-0">
            <Card.Img variant="top" src={Oliver} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>OLIVER KRANTZ</Card.Title>
              <Card.Text className='center'>
                Chief Technology Officer
                <br />
                RSA
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={Russel} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>RUSSEL AYUGI</Card.Title>
              <Card.Text className='center'>
                Head of Business Development
                <br />
                Kenya
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={Carol} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>
                CAROL MUCHEMI
              </Card.Title>
              <Card.Text className='center'>
                Co-Head of Cortex
                <br />
                Kenya
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" className="card">
            <Card.Img variant="top" src={Cristine} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>CHRISTINE BAKER</Card.Title>
              <Card.Text className='center'>
                Chief Financial Officer
                <br />
                Switzerland
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className="p-0">
            <Card.Img variant="top" src={Claire} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>CLAIRE MATUKA</Card.Title>
              <Card.Text className='center'>
                Co-Head of Cortex
                <br />
                Kenya
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={Bedie} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>BEDIE MORAN</Card.Title>
              <Card.Text className='center'>
                Venture Development Director
                <br />
                USA
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={Lauren} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>
                LAUREN CASCIO
              </Card.Title>
              <Card.Text className='center'>
                Data Advisor
                <br />
                Puerta Rico
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" className="card">
            <Card.Img variant="top" src={Emelia} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>CHRISTINE BAKER</Card.Title>
              <Card.Text className='center'>
                Company Assistant
                <br />
                Ghana
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />


      <Row>
        <Col>
          <h2>Our Story</h2>
          Impact Rooms was founded on a simple mission – to provide African start-ups with the skills, knowledge and access to capital required to succeed.

          Having watched Africa’s investment, technology and impact market explode over the last 5 -years, Impact Rooms’ Founder – Oliver Blantern – recognised that exponential market growth will come with new challenges, expectations and
        </Col>
        <Col>
        <Image src={LadyComputer} className="photoLady"></Image>
        </Col>
      </Row>
      <br/>
      <br/>


      <Row className="justify-content-md-center">
        <Col xs={2}>
          <Button variant="primary">Get in Touch</Button>
        </Col>
      </Row>
      <br/>
      <br/>


      <Row className="justify-content-md-center">
        <Col xs={2}>
        <h1>Our Values</h1>
        </Col>
      </Row>
      <br/>
      <br/>


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className="p-0">
            <Card.Img variant="top" src={acess} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>Accessibility</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={detail} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>Detail</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={inclusive} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>Inclusivity</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className="p-0">
            <Card.Img variant="top" src={impact} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>Impact</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={innovate} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>Innovation</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={collab} className="cardImage" />
            <Card.Body>
              <Card.Title className='center'>Collaboration</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br/>


      <Row className="justify-content-md-center">
        <Col xs={3}>
        <h1>Service Disclaimer</h1>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col>
        <p>
        Impact Rooms provides company guidance for growth consulting, C-suite advice and company strategy, strategic landscape assessment, competitive analysis, legal and regulatory assessment and guidance, intellectual property evaluation, and other essential and valuable advice and guidance based upon the team’s decades-worth of combined expertise. Impact Rooms does not provide investment advice, financial advice or engage investors beyond startup introductions, nor does it take responsibility for, nor guarantee against losses, nor promise success. We aim to give the best guidance we can, given transparency and under conditions of uncertainty. We advise only private companies, not publicly traded, and work within the regulatory principles of each of the countries in which our clients do business, seeking legal expertise in each of those jurisdictions.
        </p>

        </Col>
      </Row>





    </Container>
  );
}

export default AboutUs;