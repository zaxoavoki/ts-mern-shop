import React from "react";

export default function Footer(): React.ReactElement {
  return (
    <div className="container mt-auto">
      <hr className="bg-secondary" />
      <nav className="d-flex justify-content-between">
        <p>2021 &copy;</p>
        <a href="#">
          <i className="bi bi-github"></i> Github
        </a>
      </nav>
    </div>
  );
}
