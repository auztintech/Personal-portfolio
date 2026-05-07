import React from 'react';

export const Button = ({ children, variant = "primary", href, className = "" }) => {
  const baseClass = "btn";
  const variantClass = variant === "ghost" ? "btn-ghost" : "";
  
  if (href) {
    return (
      <a href={href} className={`${baseClass} ${variantClass} ${className}`}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </button>
  );
};