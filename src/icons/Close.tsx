import React, { SVGProps } from 'react';

export const Close: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' {...props}>
    <path
      fill='#1B1B1B'
      fillRule='evenodd'
      d='M8.03 7.47a.75.75 0 00-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 101.06 1.06L12 13.56l3.97 3.97a.75.75 0 101.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 00-1.06-1.06L12 11.44 8.03 7.47z'
      clipRule='evenodd'
    />
  </svg>
);
