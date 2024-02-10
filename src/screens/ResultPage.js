import React from "react";
import { Row, Col, Form } from "react-bootstrap";

const ResultPage = () => {
    return(
        <div>
            <Row className="justify-content-center my-3">
                <Col sm={12} md={6}>
                    <h4>Visvesvaraya Technological University, Belagaum</h4>
                    <h6 style={{marginLeft:'4rem', fontSize:'15px'}}>
                        VII Semester Examination Nov-Dec 2023 Results
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col sm={12} md={6}>
                    <Form.Group>
                        <Form.Label>Student Name:</Form.Label>
                        <Form.Label style={{marginLeft: '1rem'}}>Jatin</Form.Label><br/>
                        <Form.Label>Father's Name:</Form.Label>
                        <Form.Label style={{marginLeft: '0.6rem'}}>Manoj K</Form.Label><br/>
                        <Form.Label>College Name:</Form.Label>
                        <Form.Label style={{marginLeft: '0.5rem'}}>VIT Chennai</Form.Label>
                    </Form.Group>
                </Col>

                <Col sm={12} md={6} style={{border:'1px solid black'}}>
                    <Form.Group>
                        <Form.Label style={{float:'right'}}>Registration No: 19BCE10022</Form.Label>
                    </Form.Group>
                </Col>
            </Row>
        </div>
    )
}
export default ResultPage;