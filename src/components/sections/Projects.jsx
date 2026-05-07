import React, { useRef, useEffect } from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { ProjectCard } from "../ui/ProjectCard";
import { projectsData } from "../data/projectsData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Stagger animation for project cards
    gsap.fromTo(
      cardsRef.current,
      {
        x: 400,
        opacity: 0,
        rotationY: 30,
      },
      {
        x: 0,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2, // Stagger effect - each card animates 0.2s after the previous
        ease: "back.out(0.6)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef}>
      <SectionLabel>03 — work</SectionLabel>
      <SectionTitle>
        Featured <span>Projects</span>
      </SectionTitle>
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={project.id} ref={(el) => (cardsRef.current[idx] = el)}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};
