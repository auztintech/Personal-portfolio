import React from 'react';

export const SectionLabel = ({ children, centered = false }) => {
  return (
    <div className={`section-label ${centered ? 'text-center' : ''}`}>
      {children}
    </div>
  );
};