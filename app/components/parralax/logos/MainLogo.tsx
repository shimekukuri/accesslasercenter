import React, { ReactNode } from 'react';
import { useParallax } from 'react-scroll-parallax';

export default function MainLogo({
  className,
  rotate,
}: {
  className: string;
  rotate: [x: string, y: string];
}) {
  const { ref } = useParallax({
    rotate: rotate,
    opacity: [0.5, 1],
  });

  return (
    <div className={className} ref={ref}>
      <img
        src="https://le-cdn.websites.hibu.com/f10e5acbebbf4a19bbd1390a71eb08fc/dms3rep/multi/opt/logo-85e86620-1920w.png"
        alt="logo"
        className="w-1/2 md:w-1/4 mt-4 animate-opacity-to-one-800 opacity-0 shadow-2xl shadow-red-400 rounded-full"
      />
    </div>
  );
}
