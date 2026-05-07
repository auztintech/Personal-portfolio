import React from 'react';

export const SkillCard = ({ icon, title, tags }) => {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <div className="skill-title">{title}</div>
      <div className="skill-tags">
        {tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
};