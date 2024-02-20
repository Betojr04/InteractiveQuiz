import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

//component imports
import { Navbar } from "../components/Navbar.js";
import { Footer } from "../components/Footer.js";
//lazy loading
const LandingPage = React.lazy(() =>
  import("./LandingPage.js").then((module) => ({ default: module.LandingPage }))
);

const HeroSection = React.lazy(() =>
  import("../components/LandingPageComponents/HeroSection.js").then(
    (module) => ({
      default: module.HeroSection
    })
  )
);

//error boundary
const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

// Layout component
export const Layout = () => {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/hero" element={<HeroSection />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
};
