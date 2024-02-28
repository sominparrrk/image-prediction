import { useState } from 'react';
import { TextInput } from '../../components/Input/TextInput';
import { Button } from '../../components/Button/Button';
import { IImage } from './types/image';
import { predictImage } from '../../api/predictImage';
import { usePrediction } from '../../context/PredictionContext';
import { ErrorText, InputContainer, LoadingText, ModalBtns, Title } from './Images.styles';
import { useTab } from '../../context/TabContext';
import { TabTypes } from '../../types/tabType';

interface IPredictContent {
  image: IImage;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PredictContent = ({ image, setIsModalOpen }: IPredictContent) => {
  const { setActiveTab } = useTab();
  const { predictionResult, setPredictionResult } = usePrediction();
  const [formData, setFormData] = useState<{ title: string; description: string }>({
    title: '',
    description: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = formData;

    try {
      setIsLoading(true);
      const newResult = await predictImage(image.id, title, description);
      setIsModalOpen(false);
      setPredictionResult([...predictionResult, newResult]);
      setIsLoading(false);
      setActiveTab(TabTypes.PREDICTIONS);
    } catch (error) {
      console.error('Error predicting image:', error);
      setError('Error occured while predicting image');
      setIsLoading(false);
    }
  };

  return (
    <div>
      <Title>Predict</Title>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <TextInput
            type='text'
            htmlFor='title'
            name='title'
            placeholder='Title'
            value={formData.title}
            onChange={handleChange}
          >
            Title
          </TextInput>
          <TextInput
            type='textarea'
            htmlFor='description'
            name='description'
            placeholder='Description'
            rows={5}
            cols={33}
            value={formData.description}
            onChange={handleChange}
          >
            Description
          </TextInput>
        </InputContainer>
        <ErrorText>{error}</ErrorText>
        {isLoading && <LoadingText>Loading...</LoadingText>}
        <ModalBtns>
          <Button isCTA={false} type='button' onClick={() => setIsModalOpen(false)}>
            Close
          </Button>
          <Button isCTA={true} type='submit'>
            Submit
          </Button>
        </ModalBtns>
      </form>
    </div>
  );
};
