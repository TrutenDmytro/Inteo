import "./Award.scss";

export default function Award({img, text}) {
  return (
    <div className="award">
      <img src={img} className="award-img" alt="" />
      <p className="award-text body-sm regular">{text}</p>
    </div>
  );
}
