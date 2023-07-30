import Link from "next/link";
import React from "react";

// navbar with logo and links to other pages and position fixed
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="flex items-center py-2 px-4">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img
              src="/images/logo.webp"
              alt="logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </Link>
        </div>
        <ul className="navbar-nav flex gap-4 ms-auto">
          <li className="nav-item">
            <Link className="nav-link" href="/about">
              A cerca de
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contact">
              Contacto
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/login">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/register">
              Registro
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
