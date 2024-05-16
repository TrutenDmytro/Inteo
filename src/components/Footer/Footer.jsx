import useWindowDimensions from "../../hooks/useWindowDimensions";
import Button from "../Button/Button";

import "./Footer.scss";

export default function Footer() {
  const { width } = useWindowDimensions();
  return (
    <div className="footer container-fluid">
      <div className="footer-inner container">
        <div className="footer-divider" data-aos="zoom-in-left"></div>
        <div className="footer-top-wrapper">
          <div className="footer-title-wrapper">
            <h1
            data-aos="zoom-in-right"
              className={`footer-title ${
                width < 768
                  ? "display-sm regular"
                  : width >= 768
                  ? "display-lg medium"
                  : ""
              }`}
            >
              Kick-start your dream home with us
            </h1>
            <h1
            data-aos="zoom-in-right"
              className={`footer-subtitle italic-text brown-text ${
                width < 768
                  ? "display-sm regular"
                  : width >= 768
                  ? "display-lg medium"
                  : ""
              }`}
            >
              Send us a hi
            </h1>
          </div>
          <div className="footer-contacts-wrapper">
            <div className="footer-contact" data-aos="zoom-in-left">
              <p className="display-xs regular">Brooklyn, New York</p>
              <p className="body-sm light">
                962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United
                State.
              </p>
            </div>
            <div className="footer-contact" data-aos="zoom-in-left">
              <p className="body-sm light">Email us at</p>
              <p className="display-xs regular brown-text">
                hello@landify.design
              </p>
            </div>
            <div className="footer-contact" data-aos="zoom-in-left">
              <p className="body-sm light">
                If you're hurry, quick call for us
              </p>
              <p className="display-xs regular brown-text">+8(663)125-08-59</p>
            </div>
          </div>
        </div>
        <div className="footer-divider" data-aos="zoom-in-left"></div>
        <div className="footer-socials-block">
          <p className="body-md light">
            © 2024 <span className="brown-text">Inteo</span> - Award winning
            studio
          </p>
          <div className="footer-connect-block">
            <div className="footer-connect">
              <p className="footer-connect-text body-sm semibold">CONNECT</p>
              <div className="footer-connect-divider"></div>
            </div>
            <div className="footer-socials">
              <a href="https://www.instagram.com/">
                <img
                  src="/socials-img-1.svg"
                  className="footer-socials-img"
                  alt=""
                />
              </a>

              <a href="https://www.facebook.com/">
                <img
                  src="/socials-img-2.svg"
                  className="footer-socials-img"
                  alt=""
                />
              </a>

              <a href="https://www.youtube.com/">
                <img
                  src="/socials-img-3.svg"
                  className="footer-socials-img"
                  alt=""
                />
              </a>
              <a href="https://twitter.com/">
                <img
                  src="/socials-img-4.svg"
                  className="footer-socials-img"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
