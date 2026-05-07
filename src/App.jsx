import React, { useEffect } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Divider } from "./components/ui/Divider";
import "./App.css";

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        if (href && href !== "#") {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
