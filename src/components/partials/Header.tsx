import React from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Badge,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../store";
import auth from "../../apis/auth/auth";
import { logoutAction } from "../../store/actions/auth.action";

function Header() {
  const numberOfItem = useSelector(
    (state: AppState) => state.customerCartReducer.numberOfItem
  );
  const cart =
    useSelector((state: AppState) => state.customerCartReducer.cart) ?? [];
  const dispatch: AppDispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  const handleLogout = (): void => {
    navigate("/login");
    localStorage.removeItem("Bearer_Token");
    localStorage.removeItem("reduxState");
  };

  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ marginBottom: "10px" }}
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              Shopping Now.
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link
                  to={"/product"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Products
                </Link>
              </Nav.Link>
              <NavDropdown title="Action" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link to="/cart" className="float-end m-1">
              <Button variant="warning">
                Giỏ hàng <Badge>{cart.length}</Badge>
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
