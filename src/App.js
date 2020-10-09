import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './large.css';
import './medium.css';
import './small.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Lotus from './Lotus.js'
import Logo from './Logo.js'
import Icons from './Icons.js'

function App() {
  return (
    <Container fluid className="full">
      <Row className="lotus-row">
        <Lotus/>
      </Row>
      <Row className="footer">
        <Col xl={4} lg={4} md={2} sm={2} xs={2} className="logo">
          <Logo/>
        </Col>
        <Col xl={4} lg={2} md={2} sm={2} xs={2} className="empty">
        </Col>
        <Col xl={4} lg={6} md={2} sm={2} xs={2} className="icons">
          <Icons/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
