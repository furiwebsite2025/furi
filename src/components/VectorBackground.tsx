
import React from 'react';
import { cn } from '@/lib/utils';

interface VectorBackgroundProps {
  className?: string;
}

const VectorBackground: React.FC<VectorBackgroundProps> = ({ className }) => {
  return (
    <div className={cn("absolute inset-0 overflow-hidden z-0", className)}>
      <div className="absolute inset-0">
        {/* Animated vectors - with reduced opacity for pulse animation */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-furi-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-furi-red/20 rounded-full blur-3xl animate-float opacity-80" />
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed" />
        
        {/* Vector patterns - reduced opacity to 15% */}
        <svg className="absolute inset-0 w-full h-full opacity-15" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default VectorBackground;
