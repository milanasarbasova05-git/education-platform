function ArrowIcon({ className }) {
  return (
    <svg 
      className={className}
      width="28" 
      height="28" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M7 17L17 7M17 7H8M17 7V16" 
        stroke="currentColor" 
        strokeWidth="3" 
        strokeLinecap="square" 
        strokeLinejoin="miter" 
      />
    </svg>
  );
}

export { ArrowIcon };