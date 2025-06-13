import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './LandingNavbar.css';
import { Link } from 'react-router-dom';
import ShinyText from './ShinyText';




const HealhiveNavbar = () => {
  return (
    <Navbar expand="lg"  fixed="top">
      <Container fluid>
        <Nav className="me-auto nav-left">
          <Nav.Link as={Link} to="/"></Nav.Link>
          
         
          <Nav.Link as={Link} to="/">Resources</Nav.Link>
        </Nav>

        <Navbar.Brand className="mx-auto fw-bold text-white"> <i className="fa-solid fa-hands-holding-circle fa-fade"></i> HEAL HIVE</Navbar.Brand>

        <Nav className="ms-auto nav-right">
          <Button variant="outline-light" className="rounded-pill me-2"> {<ShinyText 
          text="🔍 Mood Tracker" 
          disabled={false} 
          speed={3} 
          className='custom-class' 
        />}</Button>
          <Button variant="outline-light" className="rounded-pill me-2">{<ShinyText 
          text="Log in" 
          disabled={false} 
          speed={3} 
          className='custom-class' 
        />}</Button>
          <Button   className="rounded-pill bg-black">{<ShinyText 
          text ="Get Started"  
          disabled={false} 
          speed={3} 
          className='custom-class' 
        />}</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default HealhiveNavbar;
