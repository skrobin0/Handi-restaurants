import React from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Menubar = () => {
  const { users, logOut } = useAuth();

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
         <span><i class="fa-brands fa-battle-net"></i> Handi</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/home" className="nav-link">
              Home
            </Link>
            {users.email ? (
              <Button className="btn btn-info" onClick={logOut}>
                {" "}
                Logout{" "}
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;