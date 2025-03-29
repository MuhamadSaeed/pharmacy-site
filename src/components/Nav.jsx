import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import { FaCartShopping } from "react-icons/fa6";
function ProNavbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm p-2">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" height="70" style={{ borderRadius: "50%" }} />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto d-flex align-items-center">
            <li className="nav-item">
              <Link  to="/" className="nav-link text-dark link-border mx-2">الصفحة الرئيسية</Link>
            </li>
            <li className="nav-item">
              <Link  to="/products" className="nav-link text-dark link-border mx-2">جميع الادوية الطبية</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link text-dark link-border mx-2">اتصل بنا</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart" className="nav-link text-dark link-border mx-2" ><FaCartShopping style={{color: "var(--main-color)", marginRight: "10px"}} />العربة</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-dark link-border mx-2">تسجيل الدخول</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default ProNavbar;
