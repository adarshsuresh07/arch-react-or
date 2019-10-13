import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Style from './App.module.css';
function Navi() {
  const mystyle={
    backgroundColor:"none"
  }
 return (
    <div style={mystyle} >
 <Navbar  collapseOnSelect expand="lg" bsStyle="tabs" className={Style.customnav}>
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">    
    </Nav>
    <Nav >
    <NavDropdown title="More" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/1">Hello</NavDropdown.Item>
        <NavDropdown.Item href="#action/2">Hi</NavDropdown.Item>
        <NavDropdown.Item href="#action/3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#Login" >Login</Nav.Link>
      <Nav.Link eventKey={2} href="#register">
        Register
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>

  );
}

export default Navi;
