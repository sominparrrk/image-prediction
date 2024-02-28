import { ReactNode } from 'react';
import { StyledTab } from './Tab.styles';

interface TabProps {
  isActive: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
}

export const Tab = ({ isActive, children, ...rest }: TabProps) => {
  return (
    <StyledTab $isActive={isActive} {...rest}>
      {children}
    </StyledTab>
  );
};
