import React from 'react'
import { Carousel, Container, Row, Col } from "react-bootstrap";

const images = [
  "p1.jpg",
  "p2.jpg",
  "p3.jpg",
  "p4.jpg",
  "p5.jpg",
  "p6.jpg"
];

const Partnear = () => {
  // Group images into sets of 3 per slide
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 3) {
    groupedImages.push(images.slice(i, i + 3));
  }

  return (
    <>
      <section id="partnear" className="partnear_section py-5 my-5">
        <Container>
          <h2 className="text-center text-white mb-4">Our Partners Logo</h2>
          <Row>
            <div className="col-lg-12 mb-4 text-center text-white fw-bold">
              <p>
                Rapidiously expedite granular imperatives before economically sound web services.
                <br />
                Credibly actualize pandemic strategic theme platform.
              </p>
              <Carousel indicators={false} interval={2000}>
                {groupedImages.map((group, index) => (
                  <Carousel.Item key={index}>
                    <Row className="g-3 justify-content-center">
                      {group.map((img, i) => (
                        <Col md={2} sm={6} xs={12} key={i}>
                          <img
                            src={`.././assets/img/${img}`}
                            alt={`Partner ${index * 3 + i + 1}`}
                            className="d-block w-100 rounded-3"
                          />
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Partnear
