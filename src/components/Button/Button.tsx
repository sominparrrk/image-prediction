import { ReactNode } from 'react';
import { StyledButton } from './Button.styles';

type ButtonProps = {
  isCTA: boolean;
  type: 'submit' | 'button' | 'reset';
  children?: ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const Button = ({ isCTA, type, children, ...rest }: ButtonProps) => (
  <StyledButton $isCTA={isCTA} type={type} {...rest}>
    {children}
  </StyledButton>
);
