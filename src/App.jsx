import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import BlurBlob from "./BlurBlob";

function App() {
  return (
    <div className="bg-[#050414]">

      <BlurBlob position={{top: '35%', left: '20%'}} size={{width: '30%', height: '40%' }}></BlurBlob>

      {/* <div className="absolute-inset-0 bg-[linear-gradient(to_right, #4f4f4f2e_1px, transparent_1px), linear-gradient(to_bottom, #4f4f4f2e_1px, transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%, #000_70%, transparent_100%)]"></div> */}


      <div
  className="absolute inset-0 pointer-events-none -z-10"
  style={{
    backgroundImage: `linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), 
                      linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px)`,
    backgroundSize: "14px 24px",
    maskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
    WebkitMaskImage: "radial-gradient(ellipse 60% 50% at 50% 0%, #000 70%, transparent 100%)",
  }}
></div>

      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
