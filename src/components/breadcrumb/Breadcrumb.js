import React from "react";
import { Breadcrumb } from "react-bootstrap";

function Breadcrumbs({ page }) {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default Breadcrumbs;
