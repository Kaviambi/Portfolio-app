import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import image from './pages/images/img.jfif';
import './pages/style.css';
function NavTabs({ currentPage, handlePageChange}) {
    return(
        <Navbar bg="dark" variant="warning" style={{backgroundImage: `url(${image})`, padding: "2rem"}}>
        <Container >
          <Navbar.Brand ><h2>KAVITHA RAJESH </h2></Navbar.Brand>
          <Nav className="topnav-right">

            <a href="#about" 
            onClick={() => handlePageChange('About')}

            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About
            </a>

          
            <a href="#portfolio" onClick={() => handlePageChange('Portfolio')}

className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
>Portfolio</a>
<a href="#contact" 
            onClick={() => handlePageChange('Contact')}
            
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
                </a>


            <a href="#resume" onClick={() => handlePageChange('Resume')}

className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
>Resume</a>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavTabs;