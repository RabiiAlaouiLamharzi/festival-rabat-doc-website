import React from "react";
import Logo from "../assets/festi-logo-again.png";
import { FOOTER_TEXTS } from "../constants/index.js";
import { useTranslation } from "react-i18next";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <nav className="footer-inner">
        <section className="footer-item">
          <img className="footer-logo1" src={Logo} alt="Logo" />
          <h2 className="h2class">
            {FOOTER_TEXTS.MAKE_PASSION_1}
            <br /> {FOOTER_TEXTS.MAKE_PASSION_2} <br />
            <b className="color">
              {" "}
              {FOOTER_TEXTS.MAKE_PASSION_3} <br />{" "}
            </b>
          </h2>
          <h2 className="h2class">{FOOTER_TEXTS.MAKE_WITH_PASSION}</h2>
        </section>

        <section className="footer-item">
          <h3>{FOOTER_TEXTS.EXPLORE_TITLE}</h3>
          <ul>
            {FOOTER_TEXTS.EXPLORE_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-item">
          <h3>{FOOTER_TEXTS.VISIT_TITLE}</h3>
          <a
            href={`https://www.google.com/maps/place/imm.+2+n%C2%B08,+2+Rue+Bait+Lahm,+Rabat`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {FOOTER_TEXTS.VISIT_ADDRESS.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </a>

          <h3 className="desktop">{FOOTER_TEXTS.CONTACT_TITLE}</h3>
          <p className="desktop">
            <a
              href={`mailto:${FOOTER_TEXTS.CONTACT_EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {FOOTER_TEXTS.CONTACT_EMAIL}
            </a>
          </p>
          <p className="desktop">
            <a
              href="#footer"
              rel="noopener noreferrer"
            >
              {FOOTER_TEXTS.CONTACT_PHONE}
            </a>
          </p>
        </section>

        <section className="footer-item">
          <h3>{FOOTER_TEXTS.NEW_BUSINESS_TITLE}</h3>
          <p>
            <a href="#">{FOOTER_TEXTS.NEW_BUSINESS_PHONE}</a>
          </p>
        </section>

        <section className="footer-item">
          <h3>{FOOTER_TEXTS.FOLLOW_TITLE}</h3>
          <ul>
            {FOOTER_TEXTS.FOLLOW_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-item legal" id="legal-section">
          <h3>{FOOTER_TEXTS.LEGAL_TITLE}</h3>
          <ul>
            {FOOTER_TEXTS.LEGAL_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="footer-item">
          <a
            href="https://drive.google.com/file/d/1lLgB37G0tj2tfOXVIhV8ChnNRULtUVpU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-button"
          >
            {FOOTER_TEXTS.VIEW_PRESSBOOK}
          </a>
        </section>
      </nav>
    </footer>
  );
};

export default Footer;
