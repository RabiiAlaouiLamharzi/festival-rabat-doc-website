import React, { useState, lazy, Suspense } from "react";
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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-white">
        <div id="navbar">
          <Navbar />
        </div>
        <div id="hero">
          <Suspense fallback={<Preloader />}>
            <LazyHero />
          </Suspense>
        </div>
        <div id="bar">
          <Suspense fallback={<Preloader />}>
            <LazyBar />
          </Suspense>
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "Goldenrod",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div id="intro">
          <Suspense fallback={<Preloader />}>
            <LazyIntro />
          </Suspense>
        </div>
        <div
          style={{
            height: "5px",
            backgroundColor: "black",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        ></div>
        <div id="details">
          <Suspense fallback={<Preloader />}>
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
          <Suspense fallback={<Preloader />}>
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
          <Suspense fallback={<Preloader />}>
            <LazyWinners />
          </Suspense>
        </div>
        <div id="sponsors">
          <Suspense fallback={<Preloader />}>
            <LazySponsors />
          </Suspense>
        </div>
        <div id="buttons">
          <Suspense fallback={<Preloader />}>
            <LazyButtons />
          </Suspense>
        </div>
        <div id="articles">
          <Suspense fallback={<Preloader />}>
            <LazyArticles />
          </Suspense>
        </div>
        <div id="decorative">
          <Suspense fallback={<Preloader />}>
            <LazyDeco />
          </Suspense>
        </div>
        <center></center>
        <div id="footer">
          <Suspense fallback={<Preloader />}>
            <LazyFooter />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
