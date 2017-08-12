import React,{Component} from 'react';
import {Navbar, Nav, Col, Grid, NavItem} from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return (
				<Navbar id="navbar-custom" >
					<Col md={10} mdOffset={1}	>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <a href="/posts">Post-List</a>
				      </Navbar.Brand>
							<Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav pullRight>
								<NavItem eventKey={1} href="/"> Posts </NavItem>
				        <NavItem eventKey={2} href="/posts/new">News </NavItem>
				        <NavItem eventKey={3} href="https://github.com/">Github</NavItem>
				      </Nav>
				    </Navbar.Collapse>
						</Col>
			  </Navbar>
		)
	}
}
