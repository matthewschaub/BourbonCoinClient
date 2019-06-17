import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Login from '../Login/Login'
import './Navbar.css'
import logo from './logo.png';

class Navigation extends Component {
  constructor(props){
    super(props)
    this.state = {
      account: "",
      signOnOpen: false,
    }
  }

  accountToggleClickHandler = () => {
    this.setState((prevState) => {
      return({signOnOpen: !prevState.signOnOpen})
    });
  };

  render() { 
    let login;

    if(this.state.signOnOpen){
      login = <Login signOnOpen={this.state.signOnOpen} accountToggleClickHandler = { this.accountToggleClickHandler }/>; 
    }

    return (
    <div>
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
      <img
        alt="logo"
        src={ logo }
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
      {' BourbonCoin '}
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <NavDropdown title="Buy Coins" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/buy">Classifieds</NavDropdown.Item>
              <NavDropdown.Item href="/buy">Raffles</NavDropdown.Item>
              <NavDropdown.Item href="/buy">Gaming</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/buy">All</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="" className="mr-sm-2" />
            <Button variant="outline-primary" className="searchButton">Search</Button>
          </Form>
          <Button onClick={this.accountToggleClickHandler} className="signInButton">Sign In</Button>
        </Navbar.Collapse>
      </Navbar>
      { login }
      </div>
    );
  }
}

export default Navigation;