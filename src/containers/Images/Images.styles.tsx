import styled from 'styled-components';
import { Button } from '../../components/Button/Button';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xxl};
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.font.size.md};
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableTitle = styled.th`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const TableData = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  text-align: center;
`;

export const PredictBtn = styled(Button)`
  width: 100%;
  height: 100%;
`;

export const ModalBtns = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing.xxl};
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const ErrorText = styled.p`
  color: ${({ theme }) => theme.color.error};
  font-size: ${({ theme }) => theme.font.size.sm};
  text-align: right;
`;

export const LoadingText = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  text-align: right;
`;
