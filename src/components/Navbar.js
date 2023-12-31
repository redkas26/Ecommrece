import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AppNavbar() {
  const cart = useSelector(state => state.cart)
  return (
    <>
     <Navbar fixed='top' bg='light' expand="lg" >
      <Container>
          <Link className='navbar-brand' to="/">Ecommerce</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='nav-link' to="/">Products</Link>
              <Link className='nav-link' to="/cart">Cart {cart.length}</Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default AppNavbar;
