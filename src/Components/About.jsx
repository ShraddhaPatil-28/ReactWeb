import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import profile from '../Assets/profile-img.jpg'
import { FaChevronRight } from "react-icons/fa";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { CiFaceSmile } from "react-icons/ci";
import { AiOutlineProject } from "react-icons/ai";
import { FaHeadphones } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";
import Title from './Title';

const About = () => {
  return (

    <div className='container'>
      <div className='row'>
        <div className='About-section'>
          <Title titles="About" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
        </div>
      




      <Container >
        <Row style={{ paddingLeft: "0px" }}>
          <Col md={4}>
            <img src={profile} alt="" height={"400px"} width={"400px"} />
          </Col>
          <Col md={8} >
            <h3>UI/UX Designer & Web Developer.</h3>
            <p  className=' fst-italic'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Container>
              <Row>
                <Col md={6}><ul className='list'>
                  <li> <FaChevronRight style={{color:"blue"}}/><strong>Birthday :</strong> 1 May 1995</li>
                  <li><FaChevronRight  style={{color:"blue"}}/><strong>Website :</strong> www.example.com</li>
                  <li><FaChevronRight   style={{color:"blue"}}/><strong>Phone :</strong> +123 456 7890</li>
                  <li><FaChevronRight  style={{color:"blue"}}/><strong>City :</strong>New York, USA</li>
                </ul></Col>
                <Col md={6}><ul className='list'>
                  <li> <FaChevronRight  style={{color:"blue"}}/><strong>Age:</strong> 30</li>
                  <li><FaChevronRight style={{color:"blue"}} /><strong>Degree :</strong> Master</li>
                  <li><FaChevronRight  style={{color:"blue"}}/><strong>PhEmailone:</strong> email@example.com</li>
                  <li><FaChevronRight  style={{color:"blue"}}/><strong>Freelance :</strong>Available</li>
                </ul></Col>
              </Row>
            </Container>
            <p>Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.</p>



          </Col>
        </Row>
      </Container>
      <div>
        <Title titles="Facts" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas"/>
  
        <Container>
          <Row>
            <Col md={3}><h1><CiFaceSmile size={60} />232</h1> <p>Happy Clients consequuntur quae</p></Col>
            <Col md={3}><h1><AiOutlineProject size={60} />521</h1><p>Projects adipisci atque cum quia aut</p></Col>
            <Col md={3}><h1>< FaHeadphones size={60} />1453</h1><p>Hours Of Support aut commodi quaerat</p></Col>
            <Col md={3}><h1> <IoMdContacts size={60} />32</h1><p>Hard Workers rerum asperiores dolor</p></Col>
          </Row>
        </Container>

      </div>

      <div className='Skills'>
      <Title titles="Skills" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas"/>
      
        <Container>
          <Row className='Bar '>
            <Col md={6}>
              <strong>HTML</strong>
              <ProgressBar now={60} label={`${60}%`} className="mb-4" />
              <strong>CSS</strong>
              <ProgressBar now={60} label={`${60}%`} className="mb-4" />
              <strong>JAVASCRIPT</strong>
              <ProgressBar now={60} label={`${60}%`} className="mb-4" />
            </Col>
            <Col md={6}>
              <strong>HTML</strong>
              <ProgressBar now={60} label={`${60}%`} className="mb-4" />
              <strong>CSS</strong>
              <ProgressBar now={60} label={`${60}%`} className="mb-4" />
              <strong>JAVASCRIPT</strong>
              <ProgressBar now={60} label={`${60}%`} className="mb-4" />
            </Col>
          </Row>
        </Container>
      </div>

      </div>
    </div>
  )
}

export default About
