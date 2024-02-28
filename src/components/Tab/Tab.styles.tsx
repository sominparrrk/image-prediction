import styled from 'styled-components';

export const StyledTab = styled.button<{ $isActive?: boolean }>`
  width: 100%;
  height: 100%;
  padding: 12px 16px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.$isActive ? props.theme.color.primary : props.theme.color.gray)};
  background-color: ${(props) => (props.$isActive ? props.theme.color.background : props.theme.color.white)};
  border-bottom: ${(props) => (props.$isActive ? `2px solid ${props.theme.color.primary}` : 'none')};
  font-weight: bold;
  font-size: ${({ theme }) => theme.font.size.lg};
  cursor: pointer;
`;
