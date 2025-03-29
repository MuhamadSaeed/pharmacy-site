import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";

function Footer() {
  return (
    <footer className="text-light py-4 mt-5" style={{ backgroundColor: "#bc6c25" }}>
      <div className="container text-center d-flex flex-column">
        <img className="m-auto mb-3" src={Logo} alt="logo" style={{width: "fit-content", height: "50px", borderRadius: "50%",}}/>
        <Link to="/contact" className="text-light fw-bold text-decoration-none px-3 m-auto border">اتصل بنا</Link>
        <p className="mt-2 mb-0"> {new Date().getFullYear()} جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}

export default Footer;
