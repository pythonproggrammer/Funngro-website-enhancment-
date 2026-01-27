
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "size-9" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Background Bar Chart */}
        <rect x="20" y="35" width="8" height="20" rx="1" fill="#25f47b" fillOpacity="0.3" />
        <rect x="35" y="25" width="8" height="30" rx="1" fill="#25f47b" fillOpacity="0.5" />
        <rect x="50" y="15" width="8" height="40" rx="1" fill="#25f47b" fillOpacity="0.7" />
        <rect x="65" y="10" width="8" height="45" rx="1" fill="#25f47b" fillOpacity="0.9" />
        
        {/* Paper Plane */}
        <path d="M15 50L85 30L65 70L55 55L15 50Z" fill="url(#planeGradient)" />
        <path d="M55 55L65 70L60 55L55 55Z" fill="#1cb85d" />
        
        {/* Click & Curve Arrow */}
        <circle cx="15" cy="80" r="5" stroke="#25f47b" strokeWidth="1.5" />
        <circle cx="15" cy="80" r="2" fill="#25f47b" />
        <path d="M22 85C40 95 70 90 85 70" stroke="#25f47b" strokeWidth="3" strokeLinecap="round" />
        <path d="M80 75L87 68L89 78" stroke="#25f47b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        <defs>
          <linearGradient id="planeGradient" x1="15" y1="50" x2="85" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#25f47b" />
            <stop offset="1" stopColor="#1cb85d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
