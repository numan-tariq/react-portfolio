import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
      <Container>
        <Navbar.Brand>PORTFOLIO</Navbar.Brand>
        <Nav>
          <LinkContainer to="/me">
            <Nav.Link>Me</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/education">
            <Nav.Link>EDUCATION</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/project">
            <Nav.Link>PROJECTS</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/awards">
            <Nav.Link>AWARDS</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/whyme">
            <Nav.Link>WHY ME?</Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
