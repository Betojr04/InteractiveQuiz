/* 
  This file is the main view of the app. It contains the main sections of the app, the hero section, the solution section. It will be a functional component.
*/

import React from "react";
import "../styles/landingpage.css";
import { HeroSection } from "../components/HeroSection";
import { SolutionSection } from "../components/SolutionSection";
import { ContactSection } from "../components/ContactSection";

export const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <SolutionSection />
      <ContactSection />
    </main>
  );
};
