import React, { useState } from 'react';
import { Container, Image, Row, Col, Button, Card, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import companyLady from "../../assets/AboutUs/aboutUsMain.jpg";
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
import collab from "../../assets/AboutUs/6-5.png";
import clsx from "clsx";
import './AboutUs.css';

function AboutUs() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);


  const handleClose = () => {
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
    setShow6(false);
    setShow7(false);
    setShow8(false);
    setShow9(false);
    setShow10(false);
    setShow11(false);
  };

  const handleShow1 = () => {
    setShow1(true);
  };

  const handleShow2 = () => {
    setShow2(true);
  };


  const handleShow3 = () => {
    setShow3(true);
  };


  const handleShow4 = () => {
    setShow4(true);
  };

  const handleShow5 = () => {
    setShow5(true);
  };

  const handleShow6 = () => {
    setShow6(true);
  };

  const handleShow7 = () => {
    setShow7(true);
  };


  const handleShow8 = () => {
    setShow8(true);
  };


  const handleShow9 = () => {
    setShow9(true);
  };


  const handleShow10 = () => {
    setShow10(true);
  };


  const handleShow11 = () => {
    setShow11(true);
  };

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
        <h1 className="text-on-image">About Us</h1>
      </Row>
      <Image src={companyLady} className="photoCompany"></Image>
      <br />

      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>


      <Row className="center">
        <Col>
          <h2>Our Team</h2>
        </Col>
      </Row>
      <br />


      <Row className='center'>
        <Col>
          <p>A highly experienced and diverse team across specialisms, gender, age and geography, who each share a deep passion and knowledge for Africa</p>
        </Col>
      </Row>


      <Row className="justify-content-md-center">
        <Col xs={10}>
          <ColoredLine color="#277C93" />
        </Col>
      </Row>
      <br />


      <Row className="mx-auto my-4">

        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={OliCard} />
            <Card.Body>
              <Card.Title className='center'>OLIVER BLANTERN</Card.Title>
              <Card.Text className='center'>
                Founder & CEO
                <br />
                UK
                <br />
                <Button variant="light" onClick={(e) => handleShow1()} >view bio</Button>
                <Modal show={show1} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={OliCard} roundedCircle={true} className="modalImage" />
                    <h4>OLIVER BLANTERN</h4>
                    <p >Founder & CEO
                      <br />
                      UK
                    </p>
                    <a
                      href="https://www.linkedin.com/in/oblantern/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>Oliver founded Impact Rooms with a clear vision - to unlock African entrepreneurship for the rest of the world. The creativity, passion, resilience and initiative that personifies Africa are the same characteristics that inspire Oliver to drive this vision. Having worked with Africa across various sectors, geographies and roles since the beginning of his career, Oliver has been exposed to the ideas of many great leaders, thinkers and innovators across the continent. With this knowledge and fuelled by an obsession for people, purpose and innovation, he believes it is the time for African ventures to shine on a world stage.</p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg",)}  >
            <Card.Img variant="top" src={Alex} />
            <Card.Body>
              <Card.Title className='center'>DR. ALEX CAHANA</Card.Title>
              <Card.Text className='center'>
                Chief Information Officer
                <br />
                USA
                <br />
                <Button variant="light" onClick={(e) => handleShow2()} >view bio</Button>
                <Modal show={show2} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Alex} roundedCircle={true} className="modalImage" />
                    <h4>DR. ALEX CAHANA</h4>
                    <p >Business Development
                      <br />
                      USA
                    </p>
                    <a
                      href="https://www.linkedin.com/in/dr-alex-cahana-health-blockchanger/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>Dr. Alex Cahana is our “intellectual anarchist” at Impact Rooms. With over 25 years of clinical experience, Alex uniquely combines medical, digital and financial deep knowledge. Consulting multiple private and public companies, international organizations, governments and investment funds in the US, EU, UN and Africa, Alex offers big picture, cross-disciplinary advice, assesses high-yield ventures and designs scalable decentralized economies. He believes that in the digital world, especially in emerging markets, owning your data is key to wealth inclusion, production and independence</p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={Inonge} />
            <Card.Body>
              <Card.Title className='center'>
                INONGE MARGARET IMASIKU
              </Card.Title>
              <Card.Text className='center'>
                Head of Local Partnerships
                <br />
                Zambia
                <br />
                <Button variant="light" onClick={(e) => handleShow3()} >view bio</Button>
                <Modal show={show3} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Inonge} roundedCircle={true} className="modalImage" />
                    <h4>INONGE MARGRET IMASIKU</h4>
                    <p >Business Development
                      <br />
                      Zambia
                    </p>
                    <a
                      href="https://www.linkedin.com/in/inonge-margaret-imasiku-57a005111/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Inonge Margaret Imasiku brings a broad experience of over 8 years in banking, finance and digital innovation experience. Having worked across roles, sector and countries in Africa, she has a unique understanding of the challenges and solutions to developing a successful startup on the continent. Inonge has also worked in leadership roles across many African startups including CEO of FinTech, eCobba, and also in other sectors including AgriTech and EduTech. Inonge has developed a strong network in the entrepreneurship and investment circles across the continent, to utilize in her time with Impact Rooms.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg")}>
            <Card.Img variant="top" src={Barry} />
            <Card.Body>
              <Card.Title className='center'>BARRY PALTE</Card.Title>
              <Card.Text className='center'>
                Chair & Chief Investment Officer
                <br />
                Australia
                <br />
                <Button variant="light" onClick={(e) => handleShow4()} >view bio</Button>
                <Modal show={show4} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Barry} roundedCircle={true} className="modalImage" />
                    <h4>BARRY PALTE</h4>
                    <p >Chairperson & Chief Investment Officer
                      <br />
                      Australia
                    </p>
                    <a
                      href="https://www.linkedin.com/in/barry-palte-76b8017/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Barry Palte is a global investment expert with a primary focus on sustainable investing and achieving positive social and private investment outcomes. Barry served as Global Chairman of the International Association of Investment Bankers – recently renamed Orion International Advisors - his global relationships provide access to unique investment opportunities which combine exceptional investment returns with tightly managed risk, all while focusing on delivering social outcomes explicitly mapped to sustainable development goals.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={Oliver} />
            <Card.Body>
              <Card.Title className='center'>OLIVER KRANTZ</Card.Title>
              <Card.Text className='center'>
                Chief Technology Officer
                <br />
                RSA
                <br />
                <Button variant="light" onClick={(e) => handleShow5()} >view bio</Button>
                <Modal show={show5} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Oliver} roundedCircle={true} className="modalImage" />
                    <h4>OLIVER KRANTZ</h4>
                    <p >Operations & Technology
                      <br />
                      RSA
                    </p>
                    <a
                      href="https://www.linkedin.com/in/krantz/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Oliver has been involved in payment services for over 25 years, joining one of the first Fintech Advisory firms in London in 2010. As a technology expert Oliver has held several CTO/ CIO positions in global corporates as well as startup companies and in the last decade has performed dozens of technical and operational due diligence projects across Africa, Middle-East and South East Asia. Living in Johannesburg, he is passionate about financial inclusion in Africa and has consulted to payments and micro-finance company across the continent. Managing his own consulting business, he also runs an import/ export business and is co-founder of a raw pet food manufacturer.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={Russel} />
            <Card.Body>
              <Card.Title className='center'>RUSSEL AYUGI</Card.Title>
              <Card.Text className='center'>
                Head of Business Development
                <br />
                Kenya
                <br />
                <Button variant="light" onClick={(e) => handleShow6()} >view bio</Button>
                <Modal show={show6} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Russel} roundedCircle={true} className="modalImage" />
                    <h4>RUSSEL AYUGI</h4>
                    <p >Business Development
                      <br />
                      Kenya
                    </p>
                    <a
                      href="https://www.linkedin.com/in/russelatlinkedn/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Russel brings an expert understanding of Africa’s technology ecosystem. With a passion for innovation, development, and impact, his prior experience in global communication, research at the United Nations, and managing the Tech in Africa publication, has given him a unique birds-eye-view of Africa’s rapidly changing entrepreneurship landscape. Responsible for business development, Russel manages the relationships between companies, investors and partners at Impact Rooms.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={Carol} />
            <Card.Body>
              <Card.Title className='center'>
                CAROL MUCHEMI
              </Card.Title>
              <Card.Text className='center'>
                Co-Head of Cortex
                <br />
                Kenya
                <br />
                <Button variant="light" onClick={(e) => handleShow7()} >view bio</Button>
                <Modal show={show7} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Carol} roundedCircle={true} className="modalImage" />
                    <h4>CAROL MUCHEMI</h4>
                    <p >Data
                      <br />
                      Kenya
                    </p>
                    <a
                      href="https://www.linkedin.com/in/carol-muchemi-81bbb6ba/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Carol is a Data Scientist with experience in analysis and Machine Learning development. Carol has specialized in the implementing Machine Learning technologies across products in finance and healthcare industries. Over the years, Carol has worked in African startups and is particularly passionate about creating high value impact to companies. With the mission of Impact Rooms, Carol is particularly excited to ensure that startups are matched correctly with potential investors for their ventures that continues to solve global problems.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={Cristine} />
            <Card.Body>
              <Card.Title className='center'>CHRISTINE BAKER</Card.Title>
              <Card.Text className='center'>
                Chief Financial Officer
                <br />
                Switzerland
                <br />
                <Button variant="light" onClick={(e) => handleShow8()} >view bio</Button>
                <Modal show={show8} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Cristine} roundedCircle={true} className="modalImage" />
                    <h4>CHRISTINE BAKER</h4>
                    <p >Finance
                      <br />
                      Switzerland
                    </p>
                    <a
                      href="https://www.linkedin.com/in/christineebaker/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Christine joins Impact Rooms with over 20 years of finance experience. She’s held leadership positions in some of the City’s top investment banks, where she brought a macro perspective to asset allocation strategies. In 2015, she decided to devote her skills and experience to mobilizing funds around initiatives that address some of the world’s most pressing challenges. She is passionate about taking impact mainstream and, in particular, about helping Africa to develop the ecosystem it needs to support a path towards sustainable and inclusive growth. Her collaborative network on the continent includes start-ups, SMEs, public and private sector funds, policy makers and DFIs.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={Claire} />
            <Card.Body>
              <Card.Title className='center'>CLAIRE MATUKA</Card.Title>
              <Card.Text className='center'>
                Co-Head of Cortex
                <br />
                Kenya
                <br />
                <Button variant="light" onClick={(e) => handleShow9()} >view bio</Button>
                <Modal show={show9} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Claire} roundedCircle={true} className="modalImage" />
                    <h4>CLAIRE MATUKA</h4>
                    <p >
                      <br />
                      Kenya
                    </p>
                    <a
                      href="https://www.linkedin.com/in/claire-matuka-10b308152/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Claire is a statistician, data scientist and AI enthusiast. Over the course of her education and career, she has acquired hands-on experience in the implementation of various AI and Data Science techniques to benefit businesses. She is also passionate about mentoring the youth on AI.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={Bedie} />
            <Card.Body>
              <Card.Title className='center'>BEDIE MORAN</Card.Title>
              <Card.Text className='center'>
                Venture Development Director
                <br />
                USA
                <br />
                <Button variant="light" onClick={(e) => handleShow10()} >view bio</Button>
                <Modal show={show10} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Bedie} roundedCircle={true} className="modalImage" />
                    <h4>BEDIE MORAN</h4>
                    <p >Data & Finance
                      <br />
                      USA
                    </p>
                    <a
                      href="https://www.linkedin.com/in/bedie-moran-08858b29/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Bedie is devoted to developing transformative solutions to improve the quality of our lives in emerging economies. He relies on his diverse background of working both in small innovative enterprises and large international organizations to incite change using emerging digital technologies. Starting his career in Wall St working in capital markets and treasury, then moving his focus to operations and technology in a top 5 management consulting firm, provides partners with comprehensive executive support for emerging projects. He has worked extensively in the US, EU, the Middle East, and Africa, working alongside clientele to realize sustainable growth and success.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className={clsx("center", "shadow-lg",)}  >
            <Card.Img variant="top" src={Lauren} />
            <Card.Body>
              <Card.Title className='center'>
                LAUREN CASCIO
              </Card.Title>
              <Card.Text className='center'>
                Data Advisor
                <br />
                Puerta Rico
                <br />
                <Button variant="light" onClick={(e) => handleShow11()} >view bio</Button>
                <Modal show={show11} onHide={handleClose}>
                  <Modal.Body className="center">
                    <Image src={Lauren} roundedCircle={true} className="modalImage" />
                    <h4>LAUREN CASCIO</h4>
                    <p >Data Advisor
                      <br />
                      Puerta Rico
                    </p>
                    <a
                      href="https://www.linkedin.com/in/laurencascio/"
                      className="linkdin social"
                    >
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <br />
                    <p className='modalText'>
                      Lauren is the founder of aKinned, a US-based seed fund backing health-tech in Africa. Prior to her recent move into venture capital, she co-founded abartysHealth, a growth stage health-tech company, where she ran product, data, and development for almost 7 years. She is a proven angel investor and an active tech ecosystem builder, successfully advising and mentoring dozens of companies from the idea stage and go-to-market, through fundraising.
                    </p>
                  </Modal.Body>
                </Modal>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card fluid className="p-0" className={clsx("center", "shadow-lg",)} >
            <Card.Img variant="top" src={Emelia} />
            <Card.Body>
              <Card.Title className='center'>CHRISTINE BAKER</Card.Title>
              <Card.Text className='center'>
                Company Assistant
                <br />
                Ghana
                <br />
                <br />
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
          <br />
          <br/>
          Having watched Africa’s investment, technology and impact market explode over the last 5 -years, Impact Rooms’ Founder – Oliver Blantern – recognised that exponential market growth will come with new challenges, expectations and
        </Col>
        <Col>
          <Image src={LadyComputer} className="photoLady"></Image>
        </Col>
      </Row>
      <br />
      <br />


      <Row className="center">
        <Col>
          <Button variant="outline-primary" onClick={open}>GET IN TOUCH</Button>
        </Col>
      </Row>
      <br />
      <br />


      <Row className="center">
        <Col>
          <h1>Our Values</h1>
        </Col>
      </Row>
      <br />
      <br />


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className="p-0">
            <Card.Img variant="top" src={acess} />
            <Card.Body>
              <Card.Title className='center'>Accessibility</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={detail} />
            <Card.Body>
              <Card.Title className='center'>Detail</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={inclusive} />
            <Card.Body>
              <Card.Title className='center'>Inclusivity</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>


      <Row className="mx-auto my-4">
        <Col>
          <Card fluid className="p-0">
            <Card.Img variant="top" src={impact} />
            <Card.Body>
              <Card.Title className='center'>Impact</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={innovate} />
            <Card.Body>
              <Card.Title className='center'>Innovation</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card fluid className="p-0" >
            <Card.Img variant="top" src={collab} />
            <Card.Body>
              <Card.Title className='center'>Collaboration</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />


      <Row className="justify-content-md-center">
        <Col>
          <h2 className="center">Service Disclaimer</h2>
        </Col>
      </Row>

      <Row className="justify-content-md-center">
        <Col>
          <p className="serviceText">
            Impact Rooms provides company guidance for growth consulting, C-suite advice and company strategy, strategic landscape assessment, competitive analysis, legal and regulatory assessment and guidance, intellectual property evaluation, and other essential and valuable advice and guidance based upon the team’s decades-worth of combined expertise. Impact Rooms does not provide investment advice, financial advice or engage investors beyond startup introductions, nor does it take responsibility for, nor guarantee against losses, nor promise success. We aim to give the best guidance we can, given transparency and under conditions of uncertainty. We advise only private companies, not publicly traded, and work within the regulatory principles of each of the countries in which our clients do business, seeking legal expertise in each of those jurisdictions.
          </p>
        </Col>
      </Row>
      <br/>

    </Container>
  );
}

export default AboutUs;