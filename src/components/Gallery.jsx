import React from 'react'
import { Container, Row } from 'react-bootstrap'

const Gallery = () => {
  const images = [
    'class1.jpg',
    'class2.jpg',
    'class3.jpg',
    'class4.jpg',
    'class5.jpg',
    'class6.jpg',
  ];

  return (
    <>
      <section className="gallery-section py-5">
        <Container>
          <h2 className="text-center text-purple mb-4">Gallery</h2>
          <Row>
            {images.map((img, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="gallery-item">
                  <img
                    src={`.././assets/img/${img}`}
                    className="img-fluid rounded-3"
                  />
                  <div className="gallery-overlay">
                    <h5 className="text-white">Image </h5>
                    <p className="text-white">Description for image</p>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Gallery
