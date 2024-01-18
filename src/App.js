import React, { lazy, useEffect, useState, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Preloader from "./components/Preloader";
import image1 from "./assets/african-design.jpg";

const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Bar = lazy(() => import('./components/Bar'));
const Video = lazy(() => import('./components/Video'));
const Intro = lazy(() => import('./components/Intro'));
const Details = lazy(() => import('./components/Details'));
const Winners = lazy(() => import('./components/Winners'));
const Sponsors = lazy(() => import('./components/Sponsors'));
const Buttons = lazy(() => import('./components/Buttons'));
const Articles = lazy(() => import('./components/Articles'));
const Footer = lazy(() => import('./components/Footer'));

const App = () => {
  const [isLoaded, setIsLoaded] = useState({
    navbar: false,
    hero: false,
    bar: false,
    video: false,
    intro: false,
    details: false,
    winners: false,
    sponsors: false,
    buttons: false,
    articles: false,
    footer: false,
  });

  useEffect(() => {
    const fetchData = async (component) => {
      try {
        // Simulating an asynchronous data fetch
        // Replace this with your actual data fetching logic
        await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulated fetch time

        // Once the data is loaded, update the state for the specific component
        setIsLoaded((prev) => ({ ...prev, [component]: true }));
      } catch (error) {
        console.error(`Error fetching data for ${component}:`, error);
        // Handle errors if needed
      }
    };

    // Fetch data for each component
    Object.keys(isLoaded).forEach((component) => fetchData(component));
  }, []); // Run only once on component mount

  const allComponentsLoaded = Object.values(isLoaded).every((loaded) => loaded);

  return (
    <Suspense fallback={<Preloader />}>
      <BrowserRouter>
        <div className="relative z-0 bg-white">
          {!allComponentsLoaded && <Preloader />}
          {allComponentsLoaded && (
            <div>
              <Navbar />
              <Hero />
              <Bar />
              <Intro />
              {/* Add your other components here */}
              <Details />
              <Video />
              <Winners />
              <Sponsors />
              <Buttons />
              <Articles />
              <Footer />
            </div>
          )}
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
