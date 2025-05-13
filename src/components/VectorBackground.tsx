
import React from 'react';
import { cn } from '@/lib/utils';

interface VectorBackgroundProps {
  className?: string;
}

const VectorBackground: React.FC<VectorBackgroundProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <div className="absolute inset-0">
        {/* Animated vectors */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-furi-red/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-furi-red/5 rounded-full blur-3xl animate-float opacity-70" />
        <div className="absolute bottom-1/3 left-1/3 w-56 h-56 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Vector patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default VectorBackground;
