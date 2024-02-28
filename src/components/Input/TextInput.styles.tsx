import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.md};

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.black};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.gray};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.font.size.md};

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.black};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.gray};
  }
`;
