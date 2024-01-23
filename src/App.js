import React, { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";

// Lazy-loaded components
const LazyHero = lazy(() => import("./components/Hero"));
const LazyBar = lazy(() => import("./components/Bar"));
const LazyVideo = lazy(() => import("./components/Video"));
const LazyIntro = lazy(() => import("./components/Intro"));
const LazyDetails = lazy(() => import("./components/Details"));
const LazyWinners = lazy(() => import("./components/Winners"));
const LazySponsors = lazy(() => import("./components/Sponsors"));
const LazyButtons = lazy(() => import("./components/Buttons"));
const LazyArticles = lazy(() => import("./components/Articles"));
const LazyFooter = lazy(() => import("./components/Footer"));
const LazyDeco = lazy(() => import("./components/Decorative"));
const LazyNews = lazy(() => import("./components/Newsletter"));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 8 seconds
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 8000);

    return () => {
      // Clear the timeout on component unmount
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        {loading && <Preloader />} {/* Display preloader while loading */}
        <div id="navbar">
          <Navbar />
        </div>
        <div id="hero">
          <Suspense>
            <LazyHero />
          </Suspense>
        </div>
        <div id="bar">
          <Suspense>
            <LazyBar />
          </Suspense>
        </div>
        <div id="intro">
          <Suspense>
            <LazyIntro />
          </Suspense>
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "Goldenrod",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div
          style={{
            height: "5px",
            backgroundColor: "black",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div id="details">
          <Suspense>
            <LazyDetails />
          </Suspense>
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "black",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div id="video">
          <Suspense>
            <LazyVideo />
          </Suspense>
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "black",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div id="winners">
          <Suspense>
            <LazyWinners />
          </Suspense>
        </div>
        <div id="sponsors">
          <Suspense>
            <LazySponsors />
          </Suspense>
        </div>
        <div id="buttons">
          <Suspense>
            <LazyButtons />
          </Suspense>
        </div>
        <div id="articles">
          <Suspense>
            <LazyArticles />
          </Suspense>
        </div>
        <div id="decorative">
          <Suspense>
            <LazyDeco />
          </Suspense>
        </div>
        <center></center>
        <div id="News">
          <Suspense>
            <LazyNews />
          </Suspense>
        </div>
        <div id="footer">
          <Suspense>
            <LazyFooter />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
