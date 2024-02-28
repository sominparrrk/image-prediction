import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
`;

export const TabContainer = styled.div`
  display: flex;
`;
