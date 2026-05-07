import React from 'react';

export const SectionTitle = ({ children, centered = false }) => {
  return (
    <h2 className={`section-title ${centered ? 'text-center' : ''}`}>
      {children}
    </h2>
  );
};