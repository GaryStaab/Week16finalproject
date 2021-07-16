import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Navigation() {
    const [expanded, setExpanded] = useState(0);
    return (
        <Navbar bg="light" expand="lg" expanded={expanded}>
            <Navbar.Brand><Link className="nav-link" to='/'>
                <img
                    src="../../logo_default.png"
                    width="60"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                />
            </Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded((prevExpanded) => (prevExpanded = !prevExpanded))} />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" >
                    <Link className="nav-link" to='/' onClick={() => setExpanded(false)}>Home</Link>
                    <Link className="nav-link" to='/receiving' onClick={() => setExpanded(false)} >Receiving</Link>
                    <Link className="nav-link" to='/inventoryTransfer' onClick={() => setExpanded(false)} >Transfer</Link>
                    <Link className="nav-link" to='/shipping' onClick={() => setExpanded(false)} >Shipping</Link>
                    <Link className="nav-link" to='/physical' onClick={() => setExpanded(false)} >Physical</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;