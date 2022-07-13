import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="header" expand="lg">
      <div className="container my-1">
        <Link className="navbar-brand" to="/">
          <div className="d-flex">
            <h5 className="text-white">HooksPractices</h5>
          </div>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: "100px" }}></Nav>
          <Link className="header-link nav-link" to="/">
            UseState
          </Link>
          <Link className="header-link nav-link" to="/use-effect">
            UseEffect
          </Link>
          <Link className="header-link nav-link" to="/use-context">
            UseContext
          </Link>
          <Link className="header-link nav-link" to="/use-ref">
            UseRef
          </Link>
          <Link className="header-link nav-link" to="/use-callback">
            UseCallback
          </Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};

export default Header;
