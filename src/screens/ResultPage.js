import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import TableData from "./TableData";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResultPage = () => {
  const [studentDetails, setStudentDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:2002/studentDetails")
      .then((response) => {
        console.log(response.data);
        response.data.map((data) => {
          if (data.registrationID === id) {
            setStudentDetails(data);
          }
        });
      })
      .catch((error) => console.error("error -> ", error));
  }, [studentDetails]);

  return (
    <>
      <Row className="justify-content-center my-3">
        <Col sm={12} md={6}>
          <h4> Visvesvaraya Technological University,Belagavi </h4>
          <h6 style={{ marginLeft: "4rem", fontSize: "15px" }}>
            VII - Semester B.E Examination Result, Nov/Dec-2024
          </h6>
        </Col>
      </Row>

      <Row>
        <Col sm={12} md={6}>
          <Form.Group>
            <Form.Label>Student Name:</Form.Label>
            <Form.Label style={{ marginLeft: "4.5rem" }}>
              {studentDetails.studentName}{" "}
            </Form.Label>
            <br />
            <Form.Label>Father's/Mother's Name:</Form.Label>
            <Form.Label style={{ marginLeft: "0.5rem" }}>
              {studentDetails.fatherName}
            </Form.Label>
            <br />
            <Form.Label>College Name:</Form.Label>
            <Form.Label style={{ marginLeft: "4.5rem" }}>
              {studentDetails.collegeName}
            </Form.Label>
          </Form.Group>
        </Col>

        <Col sm={12} md={6} style={{ float: "right" }}>
          <Form.Group>
            <Form.Label style={{ float: "right" }}>
              Register No: {studentDetails.registrationID}
            </Form.Label>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <TableData studentID={studentDetails.registrationID} />
      </Row>
    </>
  );
};
export default ResultPage;
