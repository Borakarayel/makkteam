import css from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <p className={css.footerp}>
        designed by{" "}
        <a
          href="https://github.com/Borakarayel"
          rel="noreferrer"
          target="_blank"
        >
          BoraKarayel
        </a>
      </p>
    </div>
  );
}

export default Footer;
