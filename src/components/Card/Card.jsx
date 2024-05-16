import "./Card.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Card({ className, img, title, text, delay }) {
  const { width } = useWindowDimensions();
  return (
    <div className={className} data-aos="zoom-in-left" data-aos-delay={delay}>
      <img src={img} className="card-img" alt="" />
      <p
        className={`${
          width < 768
            ? "display-sm regular"
            : width >= 768
            ? "display-md regular"
            : ""
        }`}
      >
        {title}
      </p>
      <p className="card-text body-lg light">{text}</p>
    </div>
  );
}
