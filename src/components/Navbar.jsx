import React, { useEffect, useState } from "react";
import logo from "../assets/festi-logo.png";
import { NAVBAR_TEXTS } from "../constants/index.js";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("EN");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [timerId, setTimerId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      // Check if the scroll position is within the "video" section
      const videoSection = document.getElementById("video");
      if (videoSection) {
        const sectionTop = videoSection.offsetTop;
        const sectionHeight = videoSection.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          // Clear the existing timer
          if (timerId) {
            clearTimeout(timerId);
          }

          // Set a new timer to remove effects after a delay
          const newTimerId = setTimeout(() => {
            const header = document.querySelector(".cd-header");
            if (header) {
              header.style.backgroundColor = "rgba(0, 0, 0, 0)";
              header.style.backdropFilter = "blur(0)";
            }
          }, 500); // Adjust the delay as needed (in milliseconds)

          setTimerId(newTimerId);

          // Apply the effects while scrolling within the "video" section
          const header = document.querySelector(".cd-header");
          if (header) {
            header.style.backgroundColor = `rgba(0, 0, 0, ${scrollPosition > 50 ? 0.7 : 0})`;
            header.style.backdropFilter = `blur(${scrollPosition > 50 ? "10px" : "0"})`;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      // Clear the timer when the component is unmounted
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [scrollPosition, timerId]);

  const logoStyle = {
    transition: "transform 0.3s ease-in-out",
    display: "block",
    margin: "auto",
    textAlign: "center",
  };

  const toggleClass = () => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.toggle("nav-active");
    }
  };

  const closeNavbar = () => {
    const body = document.querySelector("body");
    if (body) {
      body.classList.remove("nav-active");
    }
  };

  const toggleLanguage = async () => {
    try {
      // Determine the new language
      const newLanguage = language === "EN" ? "FR" : "EN";

      // Make API request to update the global language variable
      await fetch("http://localhost:3001/updateGlobalVariable", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language: newLanguage }),
      });

      // Make API request to get the updated global variable
      const response = await fetch("http://localhost:3001/getGlobalVariable");

      if (!response.ok) {
        throw new Error("Failed to get global variable");
      }

      const data = await response.json();

      // Update the local state with the new language
      setLanguage(newLanguage);

      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error("Error toggling language:", error);
    }
  };

  return (
    <>
      <header
        className={`cd-header ${scrollPosition > 50 ? "navbar-black" : ""}`}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${scrollPosition > 50 ? 0.7 : 0})`,
          backdropFilter: `blur(${scrollPosition > 50 ? "10px" : "0"})`,
          width: "100%", // Set the width to 100%
        }}
      >
        <div className="header-wrapper">
          <div className="logo-wrap" style={logoStyle}>
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <div className="nav-but-wrap">
            <div className="buttons-grid">
              {/* Language button 
              <button className="language-button" onClick={toggleLanguage}>
                {language}
              </button>
              {/* Hamburger menu */}
              <div className="menu-icon hover-target" onClick={toggleClass}>
                <span className="menu-icon__line menu-icon__line-left"></span>
                <span className="menu-icon__line"></span>
                <span className="menu-icon__line menu-icon__line-right"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="nav">
        <div className="nav__content">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a href="#hero" className="hover-target" onClick={closeNavbar}>
                {NAVBAR_TEXTS.MENU_HOME}
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#details" className="hover-target" onClick={closeNavbar}>
                {NAVBAR_TEXTS.MENU_CSERA}
              </a>
            </li>
            <li className="nav__list-item">
              <a href="#winners" className="hover-target" onClick={closeNavbar}>
                {NAVBAR_TEXTS.MENU_COMPETITION}
              </a>
            </li>
            <li className="nav__list-item">
              <a
                href="#articles"
                className="hover-target"
                onClick={closeNavbar}
              >
                {NAVBAR_TEXTS.MENU_NEWS}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
