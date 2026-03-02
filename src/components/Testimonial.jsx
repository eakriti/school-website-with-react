import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// JSON data for testimonials
const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Web Developer",
    feedback:
      "This service is fantastic! It has helped me improve my productivity a lot.",
    image: "../../assets/img/t1.jpg",
    borderColor: "red",
    nameColor: "red"
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "UI/UX Designer",
    feedback:
      "I love the user-friendly interface. The team is very supportive too!",
    image: "../../assets/img/t2.jpg",
    borderColor: "green",
    nameColor: "green"



  },
  {
    id: 3,
    name: "Michael Johnson",
    role: "Software Engineer",
    feedback:
      "Highly recommended! Great value and excellent support from the company.",
    image: "../../assets/img/t3.jpg",
    borderColor: "orange",
    nameColor: "orange"


  }
];

const Testimonial = () => {
  return (
    <section className="testimonial-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <Row>
          {testimonials.map((testimonial) => (
            <Col md={4} key={testimonial.id} className="mb-4">
              <div className="testimonial-box" style={{ borderColor: testimonial.borderColor }} // ✅ color only for feedback
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-img" style={{ color: testimonial.color }} // ✅ color only for feedback

                />
                <p
                  className="testimonial-text "
                >
                  “{testimonial.feedback}”
                </p>
                <h5 style={{ color: testimonial.nameColor }}>{testimonial.name}</h5>
                <span className="text-muted" >{testimonial.role}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
