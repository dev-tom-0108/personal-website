import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Oura Kano (かのう おうら) </span>
            from <span className="purple"> from Tokyo.</span>
            <br />I am senior blockchain fullstack dev and also good designer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Research Business
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            “ Don’t wait for the other's creations, create for them ”{" "}
          </p>
          <footer className="blockquote-footer">My aim</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
