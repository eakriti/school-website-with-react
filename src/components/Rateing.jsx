import React from 'react'
import { faBuildingColumns, faChartSimple, faUserGraduate, faGlobeAsia } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'

const content = [
  {
    icon: faBuildingColumns,
    heading: "Active Learning",
  },
  {
    icon: faUserGraduate,
    heading: "Expert Teachers",
  },
  {
    icon: faGlobeAsia,
    heading: "Strategic Location",
  },
  {
    icon: faChartSimple,
    heading: "Full Day Programs",
  }
]

const Rateing = () => {
  return (
    <>
<section id="rateing" className="rating_section py-5">
  <Container>
    <h2 className="text-center text-white mb-4">Rateing</h2>
    <Row>
      {content.map((item, index) => (
        <Col lg={3} sm={6} className="text-center" key={index}>
          <div>
            <span className="rateing_icon text-white">
              <FontAwesomeIcon icon={item.icon} />
            </span>
            <h4 className="fw-bold my-3 text-white">{item.heading}</h4>
          </div>
        </Col>
      ))}
    </Row>
  </Container>
</section>
    </>
  )
}

export default Rateing
