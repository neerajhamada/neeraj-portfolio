import React from "react";

interface RocketIconProps {
  className?: string;
}

export const RocketIcon: React.FC<RocketIconProps> = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L8 6H16L12 2Z" fill="currentColor" />
    <path d="M12 22L8 18H16L12 22Z" fill="currentColor" opacity="0.4" />
    <path d="M12 6L8 18H16L12 6Z" fill="currentColor" />
  </svg>
);
