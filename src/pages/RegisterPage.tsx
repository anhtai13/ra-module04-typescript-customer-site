import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import auth from "../apis/auth/auth";
import { AppDispatch } from "../store";
import { registerAction } from "../store/actions/auth.action";

function RegisterPage() {
  const dispatch: AppDispatch = useDispatch();
  const navigate: NavigateFunction = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // TODO: Validate

    auth
      .register({
        username,
        password,
        email,
        last_name: lastName,
        first_name: firstName,
        role: "customer",
      })
      .then((response: any) => {
        dispatch(registerAction(response.token));

        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.statusText);
      });
  };

  return (
    <Row>
      <Col md={4}></Col>
      <Col md={4}>
        <h1 className="text-center my-5">Đăng Ký</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Tên người dùng</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tên Người dùng"
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={(event) => setLastName(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Mật khẩu"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nhập lại mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập lại mật khẩu"
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 text-center">
            <Button type="submit" variant="primary">
              Đăng ký
            </Button>
          </Form.Group>
        </Form>
      </Col>
      <Col md={4}></Col>
    </Row>
  );
}

export default RegisterPage;
