import useWindowDimensions from "../../hooks/useWindowDimensions";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.scss";

export default function About() {
  const { width } = useWindowDimensions();
  return (
    <div className="about container-fluid">
      <div className="about-inner container">
        <div className="about-top-wrapper">
          <div className="about-text-block">
            <SectionTitle text="ABOUT US" />
            <h1
              data-aos="zoom-in-up"
              className={`about-h1 ${
                width < 768
                  ? "display-lg medium"
                  : width >= 768
                  ? "display-xl medium"
                  : ""
              }`}
            >
              We help to bring your{" "}
              <span className="italic-text">dream home</span> to reality
            </h1>
            <p
             data-aos="zoom-in-up"
              className={`about-text ${
                width < 768
                  ? "body-md light"
                  : width >= 768
                  ? "body-lg light"
                  : ""
              }`}
            >
              We are a team of creative and professional interior designers
              dedicated to crafting spaces that reflect your unique personality
              and style.
            </p>
            <p
            data-aos="zoom-in-up"
              className={`about-text ${
                width < 768
                  ? "body-md light"
                  : width >= 768
                  ? "body-lg light"
                  : ""
              }`}
            >
              Our mission is to provide you with more than just a beautiful
              interior; we aim to create a space where you feel comfortable and
              cozy every day.
            </p>
          </div>
          <div className="about-img-block">
            <img src="/about-img-1.png" className="about-img" data-aos="zoom-in-up" alt="" />
            <img src="/about-img-2.png" className="about-img" data-aos="zoom-in-up" alt="" />
          </div>
        </div>

        <div className="about-stats" data-aos="zoom-in-up">
          <div className="about-stat">
            <p
              className={`${
                width < 768
                  ? "display-lg medium"
                  : width >= 768
                  ? "display-xl medium"
                  : ""
              }`}
            >
              100%
            </p>
            <p className="body-sm regular">SATISFIED CUSTOMERS</p>
          </div>

          <div className="about-stat">
            <p
              className={`${
                width < 768
                  ? "display-lg medium"
                  : width >= 768
                  ? "display-xl medium"
                  : ""
              }`}
            >
              120+
            </p>
            <p className="body-sm regular">TEAM MEMBERS</p>
          </div>

          <div className="about-stat">
            <p
              className={`${
                width < 768
                  ? "display-lg medium"
                  : width >= 768
                  ? "display-xl medium"
                  : ""
              }`}
            >
              3469
            </p>
            <p className="body-sm regular">SUCCESFULL CASES</p>
          </div>
        </div>
      </div>
    </div>
  );
}
