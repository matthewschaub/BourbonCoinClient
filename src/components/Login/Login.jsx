import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import SignOn from './SignOn'
import SignUp from './SignUp'
import './Login.css';


class Login extends Component {
	constructor(props){
    super(props)
    this.state = {
      signOn: this.props.signOnOpen,
    }
  }
  render() {
  	let signInOrUp; 

    if(this.state.signOn){
      signInOrUp = <SignOn/>; 
    }
    else{
      signInOrUp = <SignUp accountToggleClickHandler = { this.props.accountToggleClickHandler }/>
    }
    return (
    	<div className="register">
      	<Card>
					<Card.Header>
					  <Nav className="justify-content-center" variant="pills">
					  	<Nav.Item>
				        <Button className="loginButton" onClick= { () => {this.setState({signOn: true, });} }>Sign In</Button>
				      </Nav.Item>
				      <Nav.Item>
				        <Button className="loginButton" onClick= { () => {this.setState({signOn: false, });} }>Sign Up</Button>
				      </Nav.Item>
				    </Nav>
					</Card.Header>
					<Card.Body  className="registerForm">
					{ signInOrUp }
					</Card.Body>
				</Card>
		</div>
    );
  }
}

export default Login;