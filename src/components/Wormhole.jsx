import { useState, useEffect } from 'react';

import forestBunny from "../assets/bunny.gif";
import sproutMole from "../assets/mole.gif";
import wormhole from "../assets/wormhole.gif";

export default function Wormhole() {
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

  const strength2 = -10;

  return (
    <div className="flex items-center justify-center w-full"> 
      <div className="flex gap-4"> 
        <img
          src={wormhole}
          alt="Wormhole"
          className="w-32 h-fit scale-90 object-cover 
                     transition-transform duration-200 ease-out"
          style={{
            transform: `translateX(${offsetX * strength2}px) translateY(${offsetY * strength2}px)`
          }}
        />        
      </div>
    </div>
  );
}