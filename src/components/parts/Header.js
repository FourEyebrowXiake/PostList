import React,{Component} from 'react';
import {Navbar, Nav, Col, Grid, NavItem} from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return (
				<Navbar inverse id="navbar-custom" >
					<Col md={10} mdOffset={1}	>
				    <Navbar.Header>
				      <Navbar.Brand>
				        <div className="header-text">PostList</div>
				      </Navbar.Brand>
							<Navbar.Toggle />
				    </Navbar.Header>
				    <Navbar.Collapse>
				      <Nav >
								<NavItem eventKey={1} href="/"> POSTS </NavItem>
				        <NavItem eventKey={2} href="/posts/new">NEW </NavItem>
				        <NavItem eventKey={3} href="https://github.com/">GITHUB</NavItem>
				      </Nav>
				    </Navbar.Collapse>
						</Col>
			  </Navbar>
		)
	}
}
