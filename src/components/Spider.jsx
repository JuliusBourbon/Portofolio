import { useState, useEffect } from 'react';

import spider from "../assets/spider.gif";

export default function Spider() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 
  const midX = (window.innerWidth ?? 0) / 2;
  const midY = (window.innerHeight ?? 0) / 2;

  const offsetX = (mousePosition.x - midX) / midX;
  const offsetY = (mousePosition.y - midY) / midY;

  const strength1 = 3; 

  return (
    <div className="flex items-center justify-center w-full"> 
      <div className="flex gap-4">
        
        <img
          src={spider}
          alt="Forest Bunny"
          className="w-32 h-32 object-cover 
                     transition-transform duration-200 ease-out" 
          style={{
            transform: `translateX(${offsetX * strength1}px) translateY(${offsetY * strength1}px)`
          }}
        />
      </div>
    </div>
  );
}