import { Container, Nav, Navbar, Image, Dropdown, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-secondary mb-1" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <Image src="/apsignals.png" width={50} height={30} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto" navbarScroll>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "red",
                    }
                  : undefined
              }
              to="/"
              className="nav-link"
            >
              Home
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "red",
                    }
                  : undefined
              }
              to="/courses"
              className="nav-link"
            >
              Courses
            </NavLink>
            <NavLink
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "red",
                    }
                  : undefined
              }
              to="/about"
              className="nav-link"
            >
              About us
            </NavLink>
          </Nav>
          <div className="d-flex align-items-center gap-2">
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <Image src="https://picsum.photos/200" width="32" height="32" alt="user image" roundedCircle />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/authentication/logout">
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Button as={Link} variant="outline-danger" to="/authentication/login">
              Login
            </Button>
            <Button as={Link} variant="danger" to="/authentication/register">
              Sign-up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
