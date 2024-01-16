import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Bar from "./components/Bar";
import Video from "./components/Video";
import Intro from "./components/Intro";
import Details from "./components/Details";
import Winners from "./components/Winners";
import Sponsors from "./components/Sponsors";
import Buttons from "./components/Buttons";
import Articles from "./components/Articles";
import image1 from "./assets/african-design.jpg";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating an asynchronous data fetch
        // Replace this with your actual data fetching logic
        await new Promise((resolve) => setTimeout(resolve, 10000));

        // Once the data is loaded, update the state to stop showing the preloader
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle errors if needed
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <Preloader />
  ) : (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div id="navbar">
          <Navbar />
        </div>
        <div id="hero">
          <Hero />
        </div>
        <div id="bar">
          <Bar />
        </div>
        <div id="intro">
          <Intro />
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "Goldenrod",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div id="details">
          <Details />
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "black",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div id="video">
          <Video />
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "black",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div id="winners">
          <Winners />
        </div>
        <div id="sponsors">
          <Sponsors />
        </div>
        <div id="buttons">
          <Buttons />
        </div>
        <div id="articles">
          <Articles />
        </div>
        <div
          style={{
            height: "2.5rem",
            backgroundImage: `url(${image1})`,
          }}
        ></div>
        <center></center>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
