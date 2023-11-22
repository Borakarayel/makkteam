import young from "../assets/young.jpg";
import css from "./Main.module.css";

const Main = () => {
  return (
    <div>
      <h1>MAKK TEAM LLC</h1>
      <hr />
      <div className={css.imageContainer}>
        <img src={young} alt="image" />
        <div className={css.overlayText}>⚠ We are under construction ⚠</div>
      </div>
      <hr />
      <p>
        Email:{" "}
        <a href="mailto: makkteam.llc@gmail.com">makkteam.llc@gmail.com</a>{" "}
        <br />
        Mobile: <a href="tel: +905335564320">+90 (533) 556 43 20</a> <br />
        Phone: <a href="tel: +12817290300">+1 (281) 729 03 00</a> <br />
        Adress:{" "}
        <a>
          30 N Gould St, STE 4000 <br /> Sheridan, WY <br /> 82801
        </a>
      </p>
      <hr />
    </div>
  );
};

export default Main;
