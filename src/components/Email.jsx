import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Email = () => {
  return (
    <>
   <section id='email' className='py-5 text-white'>
    <Container>
      <Row>
        <Col md={6} className="mx-auto text-center">
          <h2 className="mb-4">Subscribe to Our Newsletter</h2>
          </Col>
        <Col md={6} className="mx-auto text-center">
          <form className="d-flex justify-content-center ">
            <input type="email" className="form-control w-60 p-3 bg-transparent " placeholder="Enter your email"  required />
            <button type="submit" className="btn btn-light ms-2 text-purple">Subscribe</button>
          </form>
        </Col>
      </Row>
    </Container>
   </section>
    </>
  )
}

export default Email

