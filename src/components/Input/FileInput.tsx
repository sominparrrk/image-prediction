import { ReactNode } from 'react';
import { StyledInput, StyledLabel } from './FileInput.styles';

type FileInputProps = {
  htmlFor?: string;
  children?: ReactNode;
  value?: string | undefined;
  name?: string;
  accept?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FileInput = ({ htmlFor, name, accept, children, ...rest }: FileInputProps) => (
  <>
    <StyledLabel htmlFor={htmlFor}>{children}</StyledLabel>
    <StyledInput type='file' id={htmlFor} name={name} accept={accept} multiple {...rest} />
  </>
);
