import { useState } from 'react';
import { ViewBtn } from './Predictions.styles';
import { IImagePrediction } from '../../types/prediction';
import { Result } from './Result';
import { Modal } from '../../components/Modal/Modal';

interface IView {
  prediction: IImagePrediction;
}

export const View = ({ prediction }: IView) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ViewBtn isCTA={true} type='button' onClick={() => setIsModalOpen(true)}>
        View
      </ViewBtn>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Result predictions={prediction.predictions} />
      </Modal>
    </>
  );
};
