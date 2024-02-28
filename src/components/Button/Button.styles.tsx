import styled from 'styled-components';

export const StyledButton = styled.button<{ $isCTA?: boolean }>`
  padding: 12px 16px;
  border: ${(props) => (props.$isCTA ? 'none' : `1px solid ${props.theme.color.gray}`)};
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isCTA ? props.theme.color.white : props.theme.color.black)};
  background-color: ${(props) => (props.$isCTA ? props.theme.color.primary : props.theme.color.white)};
  font-size: ${({ theme }) => theme.font.size.md};
  cursor: pointer;
`;
