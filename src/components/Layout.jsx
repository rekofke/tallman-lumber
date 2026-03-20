import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import PromoModal from "./PromoModal.jsx";

function Layout() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Tallman Lumber
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/" end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/products">
                Products
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact">
                Contact
              </Nav.Link>

              <NavDropdown title="Resources" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/faq">
                  FAQ
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/referrals">
                  referrals
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/support">
                  Support
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Outlet />
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <Container>
          &copy; {new Date().getFullYear()} Tallman Lumber. All rights reserved.
        </Container>
      </footer>
      <PromoModal />
    </>
  );
}

export default Layout;
