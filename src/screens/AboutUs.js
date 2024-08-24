import React from "react";
import { Image, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <Row>
        <Col>
          <Image
            src="images/vision.jpg"
            style={{ width: "530px", height: "300px" }}
            className="visoin-image"
            alt="vision image"
          />
        </Col>
        <Col>
          <p style={{ marginTop: "5rem", textAlign: "justify" }}>
            <span className="v-heading">Vision</span>
            <br />
            To become an outstanding Technological University at the cutting
            edge of Science and Technology that produces world class
            Knowledge-delivery, Research, Extension and Leadership in Technology
            innovation for Industry and Society.To become an outstanding
            Technological University at the cutting edge of Science and
            Technology that produces world class Knowledge-delivery, Research,
            Extension and Leadership in Technology innovation for Industry and
            Society.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "5rem", textAlign: "justify" }}>
            <span className="v-heading">Mission</span> <br />
            To become an outstanding Technological University at the cutting
            edge of Science and Technology that produces world class
            Knowledge-delivery, Research, Extension and Leadership in Technology
            innovation for Industry and Society.To become an outstanding
            Technological University at the cutting edge of Science and
            Technology that produces world class Knowledge-delivery, Research,
            Extension and Leadership in Technology innovation for Industry and
            Society.
          </p>
        </Col>
        <Col>
          <Image
            src="images/mission.jpg"
            style={{ width: "550px", height: "300px" }}
            alt="mission image"
            className="mission-img"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Image
            src="images/mandate.jpg"
            style={{ width: "550px", height: "300px" }}
            alt="mandate image"
            className="mandate-img"
          />
        </Col>
        <Col>
          <p style={{ marginTop: "5rem", textAlign: "justify" }}>
            <span className="mm-heading">Mandate</span> <br />
            To become an outstanding Technological University at the cutting
            edge of Science and Technology that produces world class
            Knowledge-delivery, Research, Extension and Leadership in Technology
            innovation for Industry and Society.To become an outstanding
            Technological University at the cutting edge of Science and
            Technology that produces world class Knowledge-delivery, Research,
            Extension and Leadership in Technology innovation for Industry and
            Society.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default AboutUs;
