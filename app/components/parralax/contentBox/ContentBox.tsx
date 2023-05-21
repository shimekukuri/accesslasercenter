import React, { ReactNode } from 'react';
import { useParallax } from 'react-scroll-parallax';

export default function ContentBox({
  className,
  children,
  translateX,
}: {
  className: string;
  children: ReactNode;
  translateX: [x: string, y: string];
}) {
  const { ref } = useParallax({
    translateX: translateX,
    easing: 'easeIn',
    rootMargin: { top: 25, bottom: 25, right: 25, left: 25 },
  });

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
