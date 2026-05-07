import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  useEffect(() => {
    // Animate all sections when they come into view
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
      // Animate from right to left
      gsap.fromTo(section, 
        {
          x: 200,        // Start 200px to the right
          opacity: 0,
          rotationY: 15   // Optional: slight 3D rotation
        },
        {
          x: 0,          // End at original position
          opacity: 1,
          rotationY: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',    // When top of section hits 80% of viewport
            end: 'top 50%',
            toggleActions: 'play none none reverse',
            // scrub: 1,          // Uncomment for scroll-driven animation
          }
        }
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};