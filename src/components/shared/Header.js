import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Link>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/apartments' style={linkStyle}>
				Listings
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/apartments/all' style={linkStyle}>
				All Listings
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/apartments/edit' style={linkStyle}>
				Edit Listings
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/apartments/delete' style={linkStyle}>
				Delete Listings
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/tags' style={linkStyle}>
				Tags
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/tags/all' style={linkStyle}>
				All Tags
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/tags/edit' style={linkStyle}>
				Edit Tags
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/tags/delete' style={linkStyle}>
				Delete Tags
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='/messages' style={linkStyle}>
				Inbox
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='profile' style={linkStyle}>
				Profile
			</Link>
		</Nav.Link>
		<Nav.Link>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Link>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Link>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Link>
        <Nav.Link>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Link>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='dark' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                Apartment NYC
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{/* {user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)} */}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
