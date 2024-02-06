import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

function HomeScreen() {
    return (
        <>
            <div>
                <marquee> VTU Results 2024 out - Check Exam Results Here
                    <a href="#"> Click Here...</a> Best of Luck!!!
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
        </>
    )
}
export default HomeScreen