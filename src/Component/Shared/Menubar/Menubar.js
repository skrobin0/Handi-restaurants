import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
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
            {users.email && (
              <NavDropdown
                title={users.displayName}
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/myOrder">My Order</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/manageOrder">
                  Manage All Orders
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/additems">
                  Add A Items
                </NavDropdown.Item>
              </NavDropdown>
            )}
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