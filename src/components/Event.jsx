import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Event = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="mb-4 align-items-center justify-content-center">
          <Col md={3}>
            <img src="../../assets/img/class1.jpg" alt="Image 1" className="img-fluid rounded-3 shadow-sm" />
          </Col>
          <Col md={3}>
            <Card className="p-3 h-100 border-0">
              <Card.Title style={{color:"red"}}>Imagination Classes1</Card.Title>
              <Card.Text>This is the last card in row 2.<br/>
                Dratcaly novate fuly rarched and plications awesome theme
                education athat plications creative theme education
              </Card.Text>
              <button className="btn btn-danger" style={{width:"50%"}}>Join Now</button>
            </Card>
          </Col>
          <Col md={3}>
            <img src="../../assets/img/class2.jpg" alt="Image 2" className="img-fluid rounded-3 shadow-sm" />
          </Col>
        </Row>

        <Row className="mb-4 align-items-center justify-content-center">
          <Col md={3}>
            <Card className="p-3  h-100 border-0">
              <Card.Title style={{color:"orange"}}>Imagination Classes2</Card.Title>
              <Card.Text>This is the last card in row 2.<br/>
                Dratcaly novate fuly rarched and plications awesome theme
                education athat plications creative theme education
              </Card.Text>
              <button className="btn btn-warning text-white" style={{width:"50%"}}>Join Now</button>

            </Card>
          </Col>
          <Col md={3}>
            <img src="../../assets/img/class3.jpg" alt="Image 3" className="img-fluid rounded-3 shadow-sm" />
          </Col>
          <Col md={3}>
            <Card className="p-3  h-100 border-0">
              <Card.Title style={{color:"green"}}>Imagination Classes3</Card.Title>
              <Card.Text>This is the last card in row 2.<br/>
                Dratcaly novate fuly rarched and plications awesome theme
                education athat plications creative theme education
              </Card.Text>
              <button className="btn btn-success" style={{width:"50%"}}>Join Now</button>

            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Event;
