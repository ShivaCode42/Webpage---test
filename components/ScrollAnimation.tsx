import React from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ children, delay = 0, className = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animace se spustí pouze jednou
    threshold: 0.1,    // Spustí se, když je vidět 10 % prvku
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
