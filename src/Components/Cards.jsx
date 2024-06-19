import React, { useEffect, useRef } from 'react';

const Card = ({ children, index, isVisible }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      cardRef.current.classList.add('animate-fadeOutRight');
    } else {
      cardRef.current.classList.remove('animate-fadeOutRight');
    }
  }, [isVisible]);

  return (
    <div
      ref={cardRef}
      className="transition-opacity duration-1000 ease-out transform"
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {children}
    </div>
  );
};

export default Card;
