import React, { useEffect, useState } from 'react';

export const BackgroundSpotlight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isHovered) setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isHovered]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Subtle Matrix/Tech Grid Background Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Interactive Radial Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.14), rgba(147, 51, 234, 0.06) 40%, transparent 80%)`
        }}
      />

      {/* Nerdy Custom Cursor Crosshair & Reticle */}
      {isHovered && mousePosition.x > 0 && (
        <div
          className="pointer-events-none fixed z-50 transition-transform duration-75 ease-out"
          style={{
            transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
            left: 0,
            top: 0
          }}
        >
          {/* Target Reticle Outer Ring */}
          <div className="relative -left-4 -top-4 w-8 h-8 rounded-full border border-blue-400/40 animate-spin-slow flex items-center justify-center">
            {/* Inner Dot */}
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]"></div>
          </div>

          {/* Crosshair Lines */}
          <div className="absolute -left-6 top-0 w-3 h-[1px] bg-blue-400/30"></div>
          <div className="absolute left-3 top-0 w-3 h-[1px] bg-blue-400/30"></div>
          <div className="absolute left-0 -top-6 w-[1px] h-3 bg-blue-400/30"></div>
          <div className="absolute left-0 top-3 w-[1px] h-3 bg-blue-400/30"></div>

          {/* Coordinate Readout Badge */}
          <div className="absolute left-4 top-4 px-1.5 py-0.5 rounded bg-slate-900/90 border border-slate-700 text-[9px] font-mono font-bold text-blue-400 whitespace-nowrap shadow-xs opacity-80 backdrop-blur-xs">
            X:{mousePosition.x} Y:{mousePosition.y}
          </div>
        </div>
      )}

      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />
    </div>
  );
};

