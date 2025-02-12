import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles/sections.css"; // Import global styles
import ReactGA from "react-ga4";

// Import sections
import Hero from "./screens/Hero/hero";
import Vision from "./screens/Vision/vision";
import CapabilitiesFirst from "./screens/Capabilities/capabilities_first";
import CapabilitiesSecond from "./screens/Capabilities/capabilities_second";
import CTA from "./screens/CTA/cta";
import Feedback from "./screens/Feedback/feedback";

const App = () => {
  const TRACKING_ID = "G-ZM7Z87555T";
  ReactGA.initialize(TRACKING_ID);

  const pageNames = [
    "Hero",
    "Vision",
    "CapabilitiesFirst",
    "CapabilitiesSecond",
    "CTA",
    "Feedback"
  ];

  return (
    <ReactFullpage
      scrollingSpeed={500}
      
      onLeave={(origin, destination, direction) => {
        // Use the mapping to get a virtual page name
        const pageName = `/${pageNames[destination.index]}`;
        ReactGA.send({ hitType: "pageview", page: pageName });
        
        // Track the navigation as an event using the page names
        ReactGA.event({
          category: "Navigation",
          action: "Section Change",
          label: `From ${pageNames[origin.index]} to ${pageNames[destination.index]} (${direction})`
        });
      }}

      navigation={false} // Pagination dots removed
      licenseKey={"YOUR_KEY_HERE"} // Add your fullPage.js license key here
      render={({ fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {/* Pass fullpageApi to the Hero section */}
          <Hero fullpageApi={fullpageApi} />
          <Vision />
          <CapabilitiesFirst />
          <CapabilitiesSecond />
          <CTA />
          <Feedback />
        </ReactFullpage.Wrapper>
      )}
    />
  );
};

export default App;