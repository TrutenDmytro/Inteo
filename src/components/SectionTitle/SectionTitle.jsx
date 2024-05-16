import "./SectionTitle.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SectionTitle({ text }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="section-title-wrapper">
      <div className="section-title-divider" data-aos="zoom-in-left"></div>
      <p className="section-title body-sm semibold" data-aos="zoom-in-left">{text}</p>
    </div>
  );
}
