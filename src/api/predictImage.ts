import { IImageData } from '../types/prediction';
import predictedData from './mockData.json';

export const predictImage = async (id: string, title: string, description: string): Promise<IImageData> => {
  const apiPath = 'http://localhost:8000';
  const response = await fetch(`${apiPath}/predict`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    body: JSON.stringify({
      id,
      title,
      description,
      timeOfPrediction: Date.now(),
      prediction: predictedData.predict,
    }),
  });
  const result = await response.json();

  return result;
};
