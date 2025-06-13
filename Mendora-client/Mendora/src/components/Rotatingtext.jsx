import React, { useEffect, useState } from 'react';
import './Rotatingtext.css';

const words = ['cards', 'content', 'music', 'components', 'ideas'];

const AnimatedText = ({ staticText }) => {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 100);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="merged-card">
      <h1>
        <span className="static-text">{staticText} </span>
        <span className={`animated-text slide-in ${animate ? 'animate' : ''}`}>
          {words[index]}!
        </span>
      </h1>
    </div>
  );
};

export default AnimatedText;
