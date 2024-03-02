import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-100">
      <nav className="navbar">
        <Link to="/" className="navbar-home-link">Saddle</Link>
        <div className="navbar-links">
          <Link to="/" className="navbar-link" >How it works</Link>
          <Link to="/about" className="navbar-link">About</Link>
          <Link to="/services" className="navbar-link">Services</Link>
        </div>
        <div className="navbar-actions">
          <Link to="/login">
            <button className="btn-login">Login</button>
          </Link>
        </div>
      </nav>
    </div>
  );
}
