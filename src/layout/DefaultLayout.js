import React from "react";
import { Container } from "react-bootstrap";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

function DefaultLayout({ children }) {
  return (
    <div className="defaultLayout">
      <div className="header">
        <Header />
      </div>
      <Container fluid className="main mt-4">
        {children}
      </Container>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
