
import { Button } from "../ui/Button";
import { Cursor } from "../common/Cursor";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const heroRef = useRef(null);
  const glowRef = useRef(null);
  const glow2Ref = useRef(null);

  useEffect(() => {
    // Parallax effect on mousemove
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 20;
      const yPos = (clientY / window.innerHeight - 0.5) * 20;

      gsap.to(glowRef.current, {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: "power2.out",
      });

      gsap.to(glow2Ref.current, {
        x: -xPos,
        y: -yPos,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-grid"></div>
      <div className="hero-glow" ref={glowRef}></div>
      <div className="hero-glow2" ref={glow2Ref}></div>
      <div className="hero-tag">FULLSTACK DEVELOPER // SYSTEM ARCHITECT</div>
      <h1 className="hero-name">
        Edwin A.
        <br />
        <span className="accent">Augustine</span>
      </h1>
      <p className="hero-sub">
        Building the Future, One Stack at a Time
        <Cursor />
      </p>
      <p className="hero-desc">
        I design and engineer high-performance web applications from
        pixel-perfect frontends to scalable backend systems. I don't just write
        code. I craft digital experiences.
      </p>
      <div className="hero-ctas">
        <Button href="#projects">View Projects</Button>
        <Button href="#contact" variant="ghost">
          Get In Touch
        </Button>
      </div>
    </section>
  );
};
