import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './App.css';
import HomeIcon from '@mui/icons-material/Home';
import { FileUpload } from "@mui/icons-material"; 
import TextFormatIcon from '@mui/icons-material/TextFormat';
import InfoIcon from '@mui/icons-material/Info';
import AssignmentIcon from '@mui/icons-material/Assignment';
const NavbarComponent = () => {
    return (
        <Navbar bg="white" variant="light" expand="lg" className="shadow-sm" style={{left:0}}>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        src="logo.png" // Replace with your logo path
                 
                        className="d-inline-block align-top logo1"
                        alt="Logo" style={{width:'23%'}}
                    />&nbsp;<span className='logoText'>ရာမည</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{color:'red'}}>
                    <Nav.Link as={Link} to="/" style={{color:'red',fontSize:'23px',}} className='btn '><HomeIcon/> Home</Nav.Link>&nbsp;&nbsp;
                        <Nav.Link as={Link} to="/TranslationApp"style={{color:'red',fontSize:'23px'}} className='btn '><TextFormatIcon />Translate Text</Nav.Link>&nbsp;&nbsp;                 
                        <Nav.Link as={Link} to="/Culture_Custon" style={{color:'red',fontSize:'23px'}}className=' btn '><AssignmentIcon />Culture&Custom</Nav.Link>&nbsp;&nbsp;
                        <Nav.Link as={Link} to="/MonLiterature" style={{color:'red',fontSize:'23px'}}className='btn'>< AssignmentIcon/>MonTraditional</Nav.Link>&nbsp;&nbsp;
                        <Nav.Link as={Link} to="/Aboutus" style={{color:'red',fontSize:'23px'}} className='btn '>< InfoIcon/>AboutUs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
