import { useState } from 'react';
import { PredictBtn } from './Images.styles';
import { PredictContent } from './PredictContent';
import { IImage } from './types/image';
import { Modal } from '../../components/Modal/Modal';

interface IPredict {
  image: IImage;
}

export const Predict = ({ image }: IPredict) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <PredictBtn isCTA={true} type='button' onClick={() => setIsModalOpen(true)}>
        Predict
      </PredictBtn>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PredictContent image={image} setIsModalOpen={setIsModalOpen} />
      </Modal>
    </>
  );
};
