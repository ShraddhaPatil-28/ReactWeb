

import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import About from './Components/About';
import { Container, Row, Col } from 'react-bootstrap';
import Resume from './Components/Resume';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Services from './Components/Services';


function App() {
  return (
    <>

      <Container fluid>
        <Row >
          <Col lg={2} style={{ paddingLeft: "0px" }}>

            <Navbar />

          </Col>

          <Col lg={10} style={{ padding: "0px" }}>
            <Home />
            <About />
            <Resume />
            <Portfolio />
            <Services />
          </Col>


        </Row>
      </Container>

    </>
  );
}

export default App;
