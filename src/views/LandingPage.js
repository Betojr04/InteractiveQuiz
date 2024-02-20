/* 
  This file is the main view of the app. It contains the main sections of the app, the hero section, the solution section. It will be a functional component.
*/

import React from "react";
import "../styles/LandingPageStyles/landingpage.css";
import { HeroSection } from "../components/LandingPageComponents/HeroSection";
import { SolutionSection } from "../components/LandingPageComponents/SolutionSection";
import { ContactSection } from "../components/LandingPageComponents/ContactSection";
import { SocialsSection } from "../components/LandingPageComponents/SocialsSection";

export const LandingPage = () => {
  return (
    <main>
      <HeroSection />
      <SolutionSection />
      <ContactSection />
      <SocialsSection />
    </main>
  );
};
