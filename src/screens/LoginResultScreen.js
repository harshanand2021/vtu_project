import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";

const LoginResultScreen = () => {
    return(
        <>
            <Link to='/' className="btn btn-dark" 
            style={{marginTop: '1rem'}}>Go Back</Link>

            <Row className='text-center'>
                <Col>
                    <h3>Check your results here...</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col style={{marginLeft: '-20rem'}}>
                    <Form>
                        <Form.Label>Enter your registration no :</Form.Label><br/>
                        <Form.Control type='text' 
                        placeholder="Registration no."
                        style={{width: '70%'}} />
                        <Button style={{marginTop:'1rem'}}>Submit</Button>
                    </Form>
                </Col>
            </Row>
        </>
    )
}
export default LoginResultScreen;