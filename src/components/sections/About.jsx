import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const About = () => {
  const profileImage = "myimage.jpeg";
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-img-wrap">
          <div className="about-img-box">
            {/* <div className="ea-text">EA</div> */}
            {/* Replace the EA text with an image */}
            <img
              src={profileImage}
              alt="Edwin Augustine"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
              }}
            />
            <div className="about-img-scan" style={{ zIndex: 2 }}></div>
          </div>
          <div className="about-corner tl"></div>
          <div className="about-corner tr"></div>
          <div className="about-corner bl"></div>
          <div className="about-corner br"></div>
        </div>
        <div className="about-text">
          <SectionLabel>01 — about me</SectionLabel>
          <SectionTitle>
            Who Is <span>Edwin</span>?
          </SectionTitle>
          <p>
            I'm a fullstack developer with a passion for building systems that
            are as elegant under the hood as they are on the surface. I bridge
            the gap between design and engineering — fluent in both.
          </p>
          <p>
            From designing sleek, responsive UIs to architecting RESTful APIs
            and cloud infrastructure, I work across the entire stack with
            confidence and precision.
          </p>
          <p>
            When I'm not shipping products, I'm exploring new tech, contributing
            to open source, or mentoring the next generation of developers.
          </p>
        </div>
      </div>
    </section>
  );
};
