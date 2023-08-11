import React from 'react';

const Box = ({ children, className }) => {
  // Combine the default classes with the optional className using template literals
  const combinedClassName = `bg-neutral-900 rounded-lg h-fit w-full ${className}`;

  return (
    <div className={combinedClassName}>
      {children}
    </div>
  );
};

export default Box;
