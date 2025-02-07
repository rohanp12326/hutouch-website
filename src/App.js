import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./styles/sections.css"; // Import global styles

// Import sections
import Hero from "./screens/Hero/hero";
import Vision from "./screens/Vision/vision";
import CapabilitiesFirst from "./screens/Capabilities/capabilities_first";
import CapabilitiesSecond from "./screens/Capabilities/capabilities_second";
import CTA from "./screens/CTA/cta";
import Feedback from "./screens/Feedback/feedback";

const App = () => {
  return (
    <ReactFullpage
      scrollingSpeed={500}
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