import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Breadcrumbs from "../../components/breadcrumb/Breadcrumb";
import { shortText } from "../../validation";
import { AddTicketForm } from "./AddTicketForm";
const initialFormData = {
  subject: "",
  issueDate: "",
  detail: "",
};
const initialFormError = {
  subject: false,
  issueDate: false,
  detail: false,
};
export const AddTicket = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [formDataError, setFormDataError] = useState(initialFormError);
  useEffect(() => {}, [formData, formDataError]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setFormDataError(initialFormError);
    const isSubjectValid = await shortText(formData.subject);

    setFormDataError({
      initialFormError,
      subject: !isSubjectValid,
    });

    console.log("Submit form Successfully", formData);
  };
  return (
    <Container>
      <Breadcrumbs page="New Ticket" />
      <AddTicketForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formData={formData}
        formDataError={formDataError}
      />
    </Container>
  );
};
