import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navbar.styles.scss";
import navbarlogo from "../../assets/images/navlogo.svg";

export default function Navbar() {
  return (
    <Fragment>
      <div className="navbar-container">
        <div className="nav-logo-container">
          <Link to="/">
            <img src={navbarlogo} alt="logo" className="navlogo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}
