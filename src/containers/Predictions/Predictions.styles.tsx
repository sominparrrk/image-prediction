import styled from 'styled-components';
import { Button } from '../../components/Button/Button';

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

export const ViewBtn = styled(Button)`
  width: 100%;
  height: 100%;
`;

export const ResultContainer = styled.div`
  position: relative;
`;

export const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
`;

export const ResultText = styled.p`
  margin: 0;
  color: blue;
  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const WarningText = styled.h3`
  text-align: center;
`;
