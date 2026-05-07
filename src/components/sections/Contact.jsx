import React from "react";
import { SectionLabel } from "../ui/SectionLabel";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-inner">
        <SectionLabel centered={true}>04 — contact</SectionLabel>
        <SectionTitle centered={true}>
          Let's <span>Build</span> Together
        </SectionTitle>
        <p>
          Got a project in mind? Looking for a developer who can own both the
          frontend and backend? I'm available for freelance projects, full-time
          roles, and exciting collaborations.
        </p>
        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-item-label">EMAIL</div>
            <div className="contact-item-val">auztintech@gmail.com</div>
          </div>
          <div className="contact-item">
            <div className="contact-item-label">LOCATION</div>
            <div className="contact-item-val">Benin City, Nigeria</div>
          </div>
          <div className="contact-item">
            <div className="contact-item-label">PHONE</div>
            <div className="contact-item-val">08067710016</div>
          </div>
          <div className="contact-item">
            <div className="contact-item-label">STATUS</div>
            <div className="contact-item-val" style={{ color: "var(--green)" }}>
              ● Available
            </div>
          </div>
        </div>
        <Button href="mailto:auztintech@gmail.com">INITIATE CONTACT</Button>
      </div>
    </section>
  );
};
