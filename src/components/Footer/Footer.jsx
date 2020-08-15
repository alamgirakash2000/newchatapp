import React from "react";
import "./Footer.style.css";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="footer py-3 text-center">
      <h4>Copyright © Alamgir Akash, {date}</h4>
    </div>
  );
}

export default Footer;
