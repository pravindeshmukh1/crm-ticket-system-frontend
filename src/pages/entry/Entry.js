import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Login from "../../components/Login";
import PasswordReset from "../../components/PasswordReset";
import "./entry.css";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return Alert("Fill up all the  form!");
    }
    console.log(email, password);
  };
  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };
  return (
    <div className="entry bg-info">
      {formLoad === "login" && (
        <Login
          handleOnChange={handleOnChange}
          email={email}
          password={password}
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
        />
      )}
      {formLoad === "reset" && (
        <PasswordReset
          handleOnChange={handleOnChange}
          email={email}
          handleOnSubmit={handleOnSubmit}
          formSwitcher={formSwitcher}
        />
      )}
    </div>
  );
};

export default Entry;
