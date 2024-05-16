import useWindowDimensions from "../../hooks/useWindowDimensions";
import Card from "../Card/Card";

import SectionTitle from "../SectionTitle/SectionTitle";
import "./Services.scss";

export default function Services() {
  const { width } = useWindowDimensions();
  return (
    <div className="services container-fluid">
      <div className="services-inner container">
        <div className="services-title-wrapper">
          <SectionTitle text="OUR SERVICES" />
          <h1
          data-aos="zoom-in-left"
            className={`services-h1 ${
              width < 768
                ? "display-lg medium"
                : width >= 768
                ? "display-xl medium"
                : ""
            }`}
          >
            We provide the <span className="italic-text"> best solutions</span>{" "}
            for your dream home
          </h1>
        </div>
        <div className="services-cards-wrapper">
          <Card
            className="card service-card"
            img="/service-img-1.svg"
            title="Architectural & Interior design"
            text="Let us turn your visions into reality, creating spaces that captivate with their beauty and functionality."
            delay="0"
          />

          <Card
            className="card service-card"
            img="/service-img-2.svg"
            title="Building Renovation"
            text="Our renovation works not only refresh buildings but also transform lives, creating comfort and coziness."
            delay="100"
          />

          <Card
            className="card service-card"
            img="/service-img-3.svg"
            title="Construciton Management"
            text="Our team is your reliable partner in executing construction projects without interruptions or delays."
            delay="200"
          />
        </div>
      </div>
    </div>
  );
}
