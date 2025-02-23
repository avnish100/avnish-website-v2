import React from 'react';

interface ArrowProps {
  className?: string;
}

const Arrow: React.FC<ArrowProps> = ({ className }) => {
  return (
    <svg
      width="100"
      height="100"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M5 19L19 5M19 5H9M19 5V15" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Arrow; 