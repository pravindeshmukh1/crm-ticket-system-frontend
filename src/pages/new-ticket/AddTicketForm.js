import React from "react";
import PropTypes from "prop-types";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export const AddTicketForm = ({
  handleOnChange,
  handleOnSubmit,
  formData,
  formDataError,
}) => {
  const { subject, issueDate, detail } = formData;

  return (
    <div>
      <Card body>
        <h3 className="text-info text-center">Add new Ticket</h3>
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Subject
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                name="subject"
                value={subject}
                onChange={handleOnChange}
                placeholder="enter subject"
                required
              />
              <Form.Text className="text-danger">
                {formDataError.subject && "Subject is required!"}
              </Form.Text>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="date"
                name="issueDate"
                onChange={handleOnChange}
                value={issueDate}
                placeholder="Date"
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              Detail
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                name="detail"
                row="7"
                value={detail}
                onChange={handleOnChange}
                placeholder="enter detail"
                required
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3 ">
            <Button variant="info" type="submit" style={{ float: "right" }}>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
};
