import React from 'react';

export const MobileNav = ({ isOpen, onClose }) => {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    onClose();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
      <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>About</a>
      <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>Skills</a>
      <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>Projects</a>
      <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>Contact</a>
    </div>
  );
};