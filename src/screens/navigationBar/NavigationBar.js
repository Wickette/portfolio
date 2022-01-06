import React from 'react'
import './navigationBar.css'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { navigationLinks } from '../../helpers/navigationLinks'
import 'bootstrap/dist/css/bootstrap.min.css';

function createLinks(){
    return navigationLinks.map((e, i) => (
        <Nav.Link key={i} href={e.ref}>{e.name}</Nav.Link>
    ))
}

function NavigationBar() {
    return (
        <div id='home'>
            <Navbar className='navigation_container' expand='md'>
                <Navbar.Brand href="#home">Stephanie Clark</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='links'>
                        {createLinks()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default NavigationBar
