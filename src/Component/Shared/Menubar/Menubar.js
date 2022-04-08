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
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
            {users.email && (
              <p className="text-white pt-2">
              {" "}
              <i className="far fa-user me-2"></i>
              {users.displayName} {}{" "}
            </p>
            )}
            {users.email ? (
              <Button className="ms-2 btn btn-success" onClick={logOut}>
                Logout
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