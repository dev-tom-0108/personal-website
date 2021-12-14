import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have learned about new IT techniques.
              <br />
              <br />
              I am fluent in classics like C++, Javascript and Python.
              <br />
              <br />
              Quality-oriented professional with 8+ years of experience and proven knowledge of <b className="purple">IT strategy, programming, and web design.</b>
              <br />
              <br />
              The past experiences give me a quick understanding of new program languages.
              I am proud of know well all Javascript Frameworks - <b className="purple">React.js, Redux.js, Next.js, Vue.js, Nuxt.js, Angular.js, and so on.</b>
              <br />
              <br />
              Now, I am a passionate <i><b className="purple">Blockchain Fullstack Developer</b></i> particularly interested in newly-built all chains, High logic and Fancy design.
              <br />
              <br />
              Perfect experience in NFT marketplace, Defi and DAO project
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/dev-tom-0108"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
