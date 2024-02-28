import { ReactNode } from 'react';
import { ModalCloseBtn, ModalContent, ModalOverlay } from './Modal.styles';
import { Close } from '../../icons/Close';

interface ModalProps {
  isOpen: boolean;
  children?: ReactNode;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
        <ModalCloseBtn type='button' onClick={onClose}>
          <Close aria-label='modal-close-icon' />
        </ModalCloseBtn>
      </ModalContent>
    </ModalOverlay>
  );
};
