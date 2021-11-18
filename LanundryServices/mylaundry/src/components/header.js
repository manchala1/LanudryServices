import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./home.css";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  function laundryhome() {
    history.push("/");
  }
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
        <Navbar.Brand href="#home" class="laundryhead" onClick={laundryhome}>
          Laundry
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#features">Pricing</Nav.Link>
            <Nav.Link href="#features">Career</Nav.Link>
            <Nav.Link href="/">
              <p class="signinlink">Sign In</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
