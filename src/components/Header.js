import React from "react";
import { Container, Nav, Navbar, NavDropdown, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
    return (
        <header>
            <Navbar expand="lg" className="navbar-style">
                <Container>

                    <LinkContainer to='/'>
                        <Navbar.Brand href="/">
                            <Image src="../images/logo.png" className="logo-image-style" alt="vtu-logo" roundedCircle />
                            <h6 className="logo-text-style">Visvesvaraya Technological University</h6>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">

                            <LinkContainer to='/'>
                                <Nav.Link href="/">Home</Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer to='/'>
                                <Nav.Link href="/AboutUs">About Us</Nav.Link>
                            </LinkContainer>
                            <NavDropdown title="Academics" id="basic-nav-dropdown">
                                <LinkContainer to='/admission'>
                                    <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item href="#">Curiculars & Notification</NavDropdown.Item>
                                <NavDropdown.Item href="#">Certificate Issued</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Examination" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Examination Guidelines</NavDropdown.Item>
                                <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
                                <LinkContainer to='/result/loginpage'>
                                    <NavDropdown.Item href="/result/loginpage">Results</NavDropdown.Item>
                                </LinkContainer>
                            </NavDropdown>

                            <NavDropdown title="VTU Departments" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Computer Science Engg</NavDropdown.Item>
                                <NavDropdown.Item href="#">Electronics and Communication Engg</NavDropdown.Item>
                                <NavDropdown.Item href="#">Mechanical Engg</NavDropdown.Item>
                                <NavDropdown.Item href="#">Civil Engg</NavDropdown.Item>
                                <NavDropdown.Item href="#">BCA</NavDropdown.Item>
                                <NavDropdown.Item href="#">MCA</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#">Login as Admin</NavDropdown.Item>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header;