import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

const socialIcons = [
  { id: 1, name: "facebook", url: "https://facebook.com", color: "text-primary" },
  { id: 2, name: "twitter", url: "https://twitter.com", color: "text-info" },
  { id: 3, name: "instagram", url: "https://instagram.com", color: "text-danger" },
  { id: 4, name: "linkedin", url: "https://linkedin.com", color: "text-primary" },
  { id: 5, name: "youtube", url: "https://youtube.com", color: "text-danger" },
];
const images = [
  "class1.jpg",
  "class2.jpg",
  "class3.jpg",
  "class1.jpg",
  "class2.jpg",
  "class3.jpg",
  "class1.jpg",
  "class2.jpg",
  "class3.jpg",
];


const Footer = () => {
  return (
    <>
      {/* Top Section */}
      <section className="bg-light text-white text-center py-3">
        <Container>
          <Row className="align-items-center justify-content-center py-3">

            {/* Column 1 */}
            <Col md={3}>
              <img
                src="./src/assets/img/logo.png"
                alt="Logo"
                className="img-fluid mb-2"
              />
              <p className="fw-semi-bold text-muted py-4 text-start">
                Distily enables team-driven services through extensive
                relationship platforms with interactive content.
                Enthusiastically scale effectiveness.
              </p>
              <ul className="list-unstyled text-start">
                <li className="text-dark p-2">
                  <i className="fas fa-phone-alt text-danger me-3"></i>
                  Phone: +123 456 7890
                </li>
                <li className="text-dark p-2">
                  <i className="fas fa-envelope text-success me-3"></i>
                  Email: 123@gmail.com
                </li>
                <li className="text-dark p-2">
                  <i className="fas fa-map-marker-alt text-info me-3"></i>
                  Address: 123 Street, City, Country
                </li>
              </ul>
            </Col>

            {/* Column 2 */}
            <Col md={3} className="py-5 my-4">
              <h2 className="text-warning">Latest News</h2>
              {["class1.jpg", "class2.jpg", "class3.jpg"].map((img, index) => (
                <div key={index} className="d-flex mt-3">
                  <img
                    src={`./src/assets/img/${img}`}
                    className="img-fluid rounded-3 me-3"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <p className="text-muted text-start">
                    Corem psum dolor the amectetuer adipiscing...
                  </p>
                </div>
              ))}
            </Col>

            {/* Column 3 */}
            <Col md={3} className="pb-5 ">
              <h2 className="text-danger">Latest News</h2>
              {[
                { id: 1, icon: "fa-newspaper", color: "text-danger" },
                { id: 2, icon: "fa-bullhorn", color: "text-success" },
                { id: 3, icon: "fa-lightbulb", color: "text-warning" },
              ].map((item) => (
                <div key={item.id} className="d-flex mt-3 align-items-start">
                  {/* Icon instead of Image */}
                  <i
                    className={`fas ${item.icon} ${item.color} me-3`}
                    style={{ fontSize: "40px" }}
                  ></i>
                  <p className="text-muted text-start">
                    Corem psum dolor the amectetuer adipiscing...
                  </p>
                </div>
              ))}
            </Col>

            {/* Column 4 */}
            <Col md={3} className="py-5 my-4">
              <h2 className="text-warning">Recent News</h2>

              <Row>
                {images.map((img, index) => (
                  <Col md={4} sm={6} xs={12} key={index} className="mb-4">
                    <img
                      src={`./src/assets/img/${img}`}
                      alt={`Gallery ${index}`}
                      className="img-fluid rounded-3 shadow-sm"
                    />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Bottom */}
      <footer className="bg-light text-dark text-center py-3">
        <Container>
          <Row className="align-items-center justify-content-between">

            {/* Left Side */}
            <Col md={6}>
              <p className="mb-0 text-muted">
                © 2024 Your Company. <span className="text-danger">All rights reserved</span>.
              </p>
            </Col>

            {/* Right Side - Social Icons */}
            <Col md={6} className="text-end">
              {socialIcons.map((icon) => (
                <a
                  key={icon.id}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={`fab fa-${icon.name} ${icon.color} fa-2x`}></i>
                </a>
              ))}
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
