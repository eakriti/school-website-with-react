import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Menu from '../json/Menu.json'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="bg-white">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={"./src/assets/img/logo.png"} alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="nav-navbar-responsive" className="justify-content-center">
            <Nav>
              {Menu.map((data, index) => (
                data.isDropdown ? (
                  <NavDropdown
                    title={<span className={`fw-bold ${data.textColor}`}>{data.lable}</span>}
                    key={index}
                  >
                    {data.dropdownMenu.map((item, subIndex) => (
                      <NavDropdown.Item as={Link} to={item.link} key={subIndex} className={`fw-semibold ${item.textColor}`}>
                        {item.lable}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link as={Link} to={data.link} key={index} className={`fw-bold ${data.textColor}`}>
                    {data.lable}
                  </Nav.Link>
                )
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
