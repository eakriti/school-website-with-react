import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';


// JSON data for cards (added "color")
const cardData = [
  {
    id: 1,
    image: "./src/assets/img/class1.jpg",
    title: "Imagination Class",
    description: "Class Time : 08:00 am - 10:00 am Draticaly novate fuly rarched an plications awesome theme education",
    color: "danger",// 🔴 red
    textColor: "red"            // Title color

  },
  {
    id: 2,
    image: "./src/assets/img/class2.jpg",
    title: "Drawing Class",
    description: "Class Time : 08:00 am - 10:00 am Draticaly novate fuly rarched an plications awesome theme education",
    color: "success", // 🟢 green
    textColor: "green"            // Title color

  },
  {
    id: 3,
    image: "./src/assets/img/class3.jpg",
    title: "Learning Class",
    description: "Class Time : 08:00 am - 10:00 am Draticaly novate fuly rarched an plications awesome theme education",
    color: "warning",
    textColor: "orange"            // Title color
    // 🟡 yellow
  },
];

const Classes = () => {
  return (
    <section id="card" className="pt-5 pb-5">
      <Container>
        <Row>
          {cardData.map((card) => (
            <Col lg={4} md={6} sm={12} key={card.id} className="mb-4">
              <Card className="h-100 shadow-sm rounded-3 text-purple">
                {/* Part 1: Image */}
                <Card.Img variant="top" src={card.image} alt={card.title} />

                {/* Part 2 + 3: Content */}
                <Card.Body>
                  <Card.Title style={{ color: card.textColor }} className="fw-bold">
                    {card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>

                  {/* Button with dynamic background color */}
                  <Button className="w-100" variant={card.color}>Read More</Button>
                </Card.Body>
              </Card>
            </Col>

          ))}
        </Row>
      </Container>
      <Container className="text-center mt-4 w-100">
        <Col lg={10} md={12} sm={12} className="mx-auto">
          <Link to="#" className="button-default bg-purple">Read More</Link>
        </Col>

      </Container>

    </section>
  );
};

export default Classes;
