import React from "react";
import "./Button.scss";

export default function Button({ label, font, size, handleScroll }) {
  return (
    <button
      className={`button ${font} ${size}`}
      onClick={() => handleScroll("footer")}
      data-aos="zoom-in-down"
      data-aos-delay="500"
    >
      {label}
      <img src="/arrow-up-right.svg" alt="Arrow" />
    </button>
  );
}
