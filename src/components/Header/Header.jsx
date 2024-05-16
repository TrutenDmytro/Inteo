import React, { useEffect } from "react";
import "./Header.scss";
import Button from "../Button/Button";


export default function Header({ handleScroll }) {


  return (
    <header className="header container-fluid">
      <div className="header-inner container">
        <img
          src="/logo.svg"
          className="header-logo"
          data-aos="zoom-in-down"
          data-aos-delay="100"
          alt="Logo"
        />

        <nav className="header-nav">
          <p
            className="header-nav-link body-sm medium"
            data-aos="zoom-in-down"
            data-aos-delay="200"
            onClick={() => handleScroll("about")}
          >
            About
          </p>
          <p
            className="header-nav-link body-sm medium"
            data-aos="zoom-in-down"
            data-aos-delay="300"
            onClick={() => handleScroll("services")}
          >
            Services
          </p>
          <p
            className="header-nav-link body-sm medium"
            data-aos="zoom-in-down"
            data-aos-delay="400"
            onClick={() => handleScroll("works")}
          >
            Our Work
          </p>
          <Button
            label="CONTACT US"
            font="body-xs"
            size="semibold"
            handleScroll={handleScroll}
          />
        </nav>
      </div>
    </header>
  );
}
