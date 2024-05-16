import useWindowDimensions from "../../hooks/useWindowDimensions";
import Award from "../Award/Award";
import "./Home.scss";

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <main className="home container-fluid">
      <div className="home-inner container" data-aos="zoom-in-up">
        <h1
          className={`home-h1 ${
            width < 768
              ? "display-lg medium"
              : width >= 768
              ? "display-2xl medium"
              : ""
          }`}
        >
          Make <span className="italic-text">your home</span> an ode to joy
        </h1>
        <p className="home-p body-lg light">
          We turn your empty house to a lovely home, making the compact spaces
          with space saving furnitures. Making the unique tastes of yours into
          reality!
        </p>
      </div>
      <img
        src="/home-img.png"
        className="home-img"
        alt=""
        data-aos="zoom-in-up"
        data-aos-delay="200"
      />
      <div className="awards-block container-fluid">
        <div className="awards-block-inner container">
          <div className="awards-title-wrapper">
            <p className="awards-title display-xs">Awards</p>
            <div className="awards-divider"></div>
          </div>
          <div className="awards">
            <Award img="/award-img-1.svg" text="German Design Award 2021" />
            <Award img="/award-img-2.svg" text="Gold A’ Design Award 2021" />
            <Award img="/award-img-3.svg" text="IF Design Award 2020" />
            <Award img="/award-img-4.svg" text="Good Design Award 2019" />
          </div>
        </div>
      </div>
    </main>
  );
}
