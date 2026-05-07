import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollReveal = ({ 
  children, 
  direction = 'right', // 'right', 'left', 'up', 'down'
  duration = 1,
  delay = 0,
  distance = 200,
  className = '' 
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    
    let fromProps = {};
    switch(direction) {
      case 'right':
        fromProps = { x: distance, opacity: 0 };
        break;
      case 'left':
        fromProps = { x: -distance, opacity: 0 };
        break;
      case 'up':
        fromProps = { y: distance, opacity: 0 };
        break;
      case 'down':
        fromProps = { y: -distance, opacity: 0 };
        break;
      default:
        fromProps = { x: distance, opacity: 0 };
    }

    gsap.fromTo(element,
      fromProps,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: duration,
        delay: delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction, duration, delay, distance]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};