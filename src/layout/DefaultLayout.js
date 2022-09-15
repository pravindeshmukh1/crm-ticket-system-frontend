import React from "react";
import Footer from "./partials/Footer";
import Header from "./partials/Header";

function DefaultLayout({ children }) {
  return (
    <div className="defaultLayout">
      <div className="header">
        <Header />
      </div>
      <div className="main">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
