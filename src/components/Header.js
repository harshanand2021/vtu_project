import React from "react";
import { Nav, Navbar, NavDropdown, Image } from "react-bootstrap";

function Header() {
    return (
        <>
            <Navbar className="navbar-style" expand="lg">
                <Image src="./images/logo.png" className="nav-logo" roundedCircle />
                <Navbar.Brand href="#home">Visvesvaraya Technological University</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">AboutVTU</Nav.Link>
                        <Nav.Link href="#">Link</Nav.Link>
                        <Nav.Link href="#">Admission Details</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Header;