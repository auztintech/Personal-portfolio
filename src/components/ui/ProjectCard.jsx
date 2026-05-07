import React from 'react';

export const ProjectCard = ({ number, title, description, stack, liveUrl, githubUrl }) => {
  return (
    <div className="project-card">
      <div className="project-num">{number}</div>
      <div className="project-title">{title}</div>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map((tech, idx) => (
          <span key={idx} className="tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a className="proj-link" href={liveUrl}>[LIVE]</a>
        <a className="proj-link" href={githubUrl}>[GITHUB]</a>
      </div>
    </div>
  );
};