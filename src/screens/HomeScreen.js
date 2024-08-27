import React from "react";
import { Row, Col, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeScreen() {
    return (
        <>
            <div>
                <marquee> VTU Results 2024 out - Check Exam Results Here
                    <Link to='/resultloginpage'> Click Here...</Link> Best of Luck!!!
                </marquee>
            </div>

            <div>
                <Carousel>
                    <Carousel.Item>
                        <img height="550px"
                            className="d-block w-100"
                            src="./images/img1.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="550px"
                            className="d-block w-100"
                            src="./images/img2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="550px"
                            className="d-block w-100"
                            src="./images/img3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="550px"
                            className="d-block w-100"
                            src="./images/img4.jpg"
                            alt="Fourth slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img height="550px"
                            className="d-block w-100"
                            src="./images/img5.jpg"
                            alt="Fifth slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Row>
                    <Col>
                        <h3><Link to='/about'>Vision</Link></h3>
                        <p className="p-style">
                            To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.
                        </p>
                        <p className="p-style">
                            To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.
                        </p>
                        <Button variant="warning">Read More</Button>
                    </Col>
                    <Col>
                        <Link to='/about'><h3>Mission</h3></Link>
                        <p className="p-style">
                            To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.
                        </p>
                        <p className="p-style">
                            To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.
                        </p>
                        <Button variant="warning">Read More</Button>
                    </Col>
                    <Col>
                        <Link to='/about'><h3>Mandate</h3></Link>
                        <p className="p-style">
                            To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.
                        </p>
                        <p className="p-style">
                            To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.
                        </p>
                        <Button variant="warning">Read More</Button>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default HomeScreen