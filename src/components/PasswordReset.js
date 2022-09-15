import React from "react";
import PropTypes from "prop-types";
import "./login.css";
import { Container, Form, Button, Card } from "react-bootstrap";

function PasswordReset({
  handleOnChange,
  email,
  handleOnSubmit,
  formSwitcher,
}) {
  return (
    <div>
      <Container>
        <Card body>
          <h3 className="text-info text-center">Reset Password</h3>
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
            </Form.Group>
            <Form.Group className="mb-3">
              <a href="#!" onClick={() => formSwitcher("login")}>
                Login
              </a>
            </Form.Group>
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </Form>
        </Card>
      </Container>
    </div>
  );
}

export default PasswordReset;

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  formSwitcher: PropTypes.func.isRequired,
};
