
import React from 'react';
import profile from '../Assets/profile-img.jpg'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Col, Row, Container } from 'react-bootstrap';
import { FaHome, FaAddressBook, FaBookOpen } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { CiServer } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaTwitter,FaFacebookSquare } from "react-icons/fa";
import '../images/Navbars.css'
// import { FaHome, FaUser, FaCog, FaBell } from 'react-icons/fa';

// const icons = [FaHome, FaUser, FaCog, FaBell];
const Sidebar = () => {
  return (

    <Container className='sidebarn justify-content-center d-flex'>
      <Row className="d-grid">
        <Col>
          <img src={profile} alt="" className=' p-img 5 rounded-circle  ' width="130" height="130" />

        </Col>
        <Col>
        <h2 className='d-flex  justify-content-center text-white'>Alex Smith</h2>
        </Col>
        <Col className=' d-flex  justify-content-center'>
        <p className='fs-5 text-white p-2 m-1  rounded-circle icons align-items-center d-grid justify-content-center '><FaTwitter /></p>
        <p className=' fs-5 text-white p-2 m-1  rounded-circle icons align-items-center d-grid justify-content-center  '><FaFacebookSquare /></p>
        <p className=' fs-5 text-white p-2 m-1  rounded-circle icons align-items-center d-grid justify-content-center  '><FaFacebookSquare /></p>
        <p className=' fs-5 text-white p-2 m-1  rounded-circle icons align-items-center d-grid justify-content-center  '><FaFacebookSquare /></p>
        <p className=' fs-5 text-white p-2 m-1  rounded-circle icons align-items-center d-grid justify-content-center  '><FaFacebookSquare /></p>
        </Col>
        <Col>
          <div className=" navbar me-auto my-2  text-white d-grid">

            <Nav.Link href="#action1" className=' my-3'> <span className=' px-3 fs-4'><FaHome /></span>Home</Nav.Link>
            <Nav.Link href="#action2" className=' my-3'> <span className=' px-3 fs-4'><IoMdContacts /></span>About</Nav.Link>
            <Nav.Link href="#action2" className=' my-3'> <span className=' px-3 fs-4'><FaAddressBook /></span>Resume</Nav.Link>
            <Nav.Link href="#action2" className=' my-3'> <span className=' px-3 fs-4'><FaBookOpen /></span>Portfolio</Nav.Link>
            <Nav.Link href="#action2" className=' my-3'> <span className=' px-3 fs-4'><CiServer /></span>Servies</Nav.Link>
            <Nav.Link href="#action2" className=' my-3'> <span className=' px-3 fs-4'><MdEmail /></span>Contact</Nav.Link>
          </div>
        </Col>
      </Row>
    </Container>


    /* // <Navbar bg="dark" variant="dark">
//     <Nav className="mx-auto">
//       {icons.map((icon, index) => (
        <Nav.Link key={index}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </Nav.Link>
      ))}
    </Nav>
  </Navbar> */
    // <div className=" navbar me-auto my-2 my-lg-0 text-white"
    //   style={{ maxHeight: '100px' }}>
    //   <center> <Nav.Link href="#action1"><FaHome />Home</Nav.Link>
    //     <Nav.Link href="#action2"><IoMdContacts />About</Nav.Link>
    //     <Nav.Link href="#action2"><FaAddressBook />Resume</Nav.Link>
    //     <Nav.Link href="#action2"><FaBookOpen />Portfolio</Nav.Link>
    //     <Nav.Link href="#action2"><CiServer />Servies</Nav.Link>
    //     <Nav.Link href="#action2"><MdEmail />Contact</Nav.Link></center>
    // </div>



  );
};

export default Sidebar;