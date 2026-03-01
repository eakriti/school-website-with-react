import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <>
      <section id="about" className="pt-5 pb-5 about_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12} sm={12}>
              <div className="about_img">
                <img src={'./src/assets/img/about.png'} alt="about" className="img-fluid rounded-3" />
              </div>
            </Col>
            <Col lg={6} md={12} sm={12}>
              <div className="about_content">
                <h3 className="text-purple fw-bold mb-3">About Us</h3>
                <h2 className="fw-bold mb-4 text-white">We Believe Every Child Is Unique & Talented</h2>
                <p className="text-gray mb-4 text-white">
                  Proactively administrate team building e-commerce through sustainable potentialities.
                  Dynamically foster tactical solutions without enabled value.
                  Enthusiastically fabricate seamless e-markets after user friendly intellectual capital.
                  Holisticly predominate extensible innovation rather than future-proof core competencies.
                  Enthusiastically fabricate seamless e-markets after user friendly intellectual capital.
                  Holisticly predominate extensible innovation rather than future-proof core competencies.
                </p>
                <Link to="#" className="button-default bg-purple">Read More</Link>
                <Link to="#" className="button-default bg-yellow">Buy Now</Link>

              </div>
            </Col>
          </Row>

        </Container>
      </section>

    </>
  )
}

export default About

