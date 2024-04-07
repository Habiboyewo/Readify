import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Navbars = () => {
  return (
    <div>
         <Navbar expand="lg" className="sticky-top bg-body-white">
      <Container>
        <Link to='/' className='readify fw-bold text-decoration-none'><i>Readify</i></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-2 fs-6 navs">
            <Link to='/about' className="href text-decoration-none mx-lg-3">
                About
            </Link>
            <Link to='/contact' className="href text-decoration-none mx-lg-3">
                Contact
            </Link>
            <a href="#" className='text-decoration-none text-white'>
                <button className="navbtn">LEND ONE</button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbars