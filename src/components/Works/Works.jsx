import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Button from '../Button/Button';
import Card from '../Card/Card';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Works.scss';

export default function Works({ handleScroll }) {
  const { width } = useWindowDimensions();
  return (
    <div className="works container-fluid">
      <div className="works-inner container">
        <div className="works-left-section-wrapper">
          <div className="works-title-wrapper">
            <SectionTitle text="RECENT WORKS" />
            <h1
            data-aos="zoom-in-left"
              className={`works-h1 ${
                width < 768
                  ? "display-lg medium"
                  : width >= 768
                  ? "display-xl medium"
                  : ""
              }`}
            >
              Some of <span className="italic-text">our crafts</span> made with
              love
            </h1>
          </div>
          <Card
            className="card works-card"
            img="/works-img-1.png"
            title="Villa Furnishing & Interior"
            text="Discover our portfolio of villa furnishing and interior projects, where luxury meets comfort and sophistication."
          />
          {width >= 992 && (
            <Button label="CONTACT US" font="body-xs" size="semibold" handleScroll={handleScroll} />
          )}
        </div>
        <div className="works-right-section-wrapper">
          <Card
            className="card works-card"
            img="/works-img-2.png"
            title="Luxury Hotel Renovation"
            text="Explore our portfolio of luxury hotel renovation projects, where timeless elegance meets modern sophistication."
          />
          <Card
            className="card works-card"
            img="/works-img-3.png"
            title="Residence Swimming Pool"
            text="Discover our exquisite swimming pool designs tailored to complement your residence's architecture and lifestyle."
          />
          {width < 992 && (
            <Button label="CONTACT US" font="body-xs" size="semibold" handleScroll={handleScroll} />
          )}
        </div>
      </div>
    </div>
  );
}
