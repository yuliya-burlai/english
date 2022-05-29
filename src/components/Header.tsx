import React from "react";

export const Header = () => {
  return (
<header className="d-flex justify-content-center py-3 header">
      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
  );
};
