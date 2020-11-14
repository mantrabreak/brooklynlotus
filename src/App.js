import React from 'react';
import Media from 'react-media';
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
        <Lotus />
      </Row>
      <Media queries={{
        small: "(max-width: 699px)",
        medium: "(min-width: 700px) and (max-width: 1149px)",
        large: "(min-width: 1150px)"
      }}>
        {matches => (
          <div>
            {
              matches.large &&
              // Large
              <Row className="footer">
                <Col xl={4} lg={4} md={4} className="logo">
                  <Logo />
                </Col>
                <Col xl={4} lg={4} md={2} className="empty">
                </Col>
                <Col xl={4} lg={4} md={4} className="icons">
                  <Icons />
                </Col>
              </Row>
            }
            {
              matches.medium &&
              // Medium
              <Row className="footer">
                <Col md={6} lg={6} className="logo">
                  <Logo />
                </Col>
                <Col md={6} lg={6} className="icons">
                  <Icons />
                </Col>
              </Row>
            }
            {
              matches.small &&
              // Small
              <div>
                <Row className="footer-icons">
                  <Col sm={12} xs={12} className="icons">
                    <Icons />
                  </Col>
                </Row>
                <Row className="footer-logo">
                  <Col sm={12} xs={12} className="logo">
                    <Logo />
                  </Col>
                </Row>
              </div>
            }
          </div>
        )}
      </Media>
    </Container>
  );
}

export default App;
