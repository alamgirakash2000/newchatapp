import React from "react";
import { Link } from "react-router-dom";
import "./Header.style.css";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="r">
          <div className="name">
            <h3>
              <a href="/" className="appName">
                WebChat App
              </a>
            </h3>
            <h5 className="myName">Alamgir Akash</h5>
          </div>
          <nav className="navber">
            <Link to="/" className="ml-md-3">
              Home
            </Link>
            <a class="selected">
              <Link tp="/">About App</Link>
            </a>
            <a>
              <Link to="/">Contact Me</Link>
            </a>
          </nav>
        </div>
      </div>
      <div className="login-signup">
        <div className="button login">
          <Link to="/login">
            <h5>Login</h5>
          </Link>
        </div>
        <div className="button signup">
          <Link to="/signup">
            <h5>Sign Up</h5>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
