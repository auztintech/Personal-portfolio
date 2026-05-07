import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { SkillCard } from "../ui/SkillCard";
import { skillsData } from "../data/skillsData";
import { ScrollReveal } from "../animations/ScrollReveal";

export const Skills = () => {
  return (
    <section id="skills">
      <ScrollReveal direction="right">
        <SectionLabel>02 — tech stack</SectionLabel>
        <SectionTitle>
          My <span>Arsenal</span>
        </SectionTitle>
        <div className="skills-grid">
          {skillsData.map((skill, idx) => (
            <SkillCard key={idx} {...skill} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
};
