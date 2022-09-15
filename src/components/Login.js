import React from "react";
import PropTypes from "prop-types";
import "./login.css";
import { Container, Form, Button, Card } from "react-bootstrap";

function Login({
  handleOnChange,
  email,
  password,
  handleOnSubmit,
  formSwitcher,
}) {
  return (
    <div>
      <Container>
        <Card body>
          <h3 className="text-info text-center">Client Login</h3>
          <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter email"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleOnChange}
                value={password}
                placeholder="Password"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <a href="#!" onClick={() => formSwitcher("reset")}>
                Forgot Password?
              </a>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default Login;

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};
