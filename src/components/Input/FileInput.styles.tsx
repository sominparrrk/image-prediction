import styled from 'styled-components';

export const StyledInput = styled.input<{ $type?: string }>`
  display: none;
  &:focus {
    border: 2px solid ${({ theme }) => theme.color.black};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
  max-width: 600px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: bold;
  cursor: pointer;
`;
