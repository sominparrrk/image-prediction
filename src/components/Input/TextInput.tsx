import { ReactNode } from 'react';
import { Container, StyledInput, StyledLabel, StyledTextarea } from './TextInput.styles';

type TextInputProps = {
  type: string;
  placeholder?: string;
  htmlFor?: string;
  children?: ReactNode;
  value?: string | undefined;
  name?: string;
  rows?: number;
  cols?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const TextInput = ({ type, placeholder, htmlFor, name, rows, cols, children, ...rest }: TextInputProps) => (
  <Container>
    <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
    {type === 'text' && <StyledInput type={type} placeholder={placeholder} name={name} {...rest} required />}
    {type === 'textarea' && (
      <StyledTextarea placeholder={placeholder} name={name} rows={rows} cols={cols} {...rest} required />
    )}
  </Container>
);
