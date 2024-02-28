import React, { ReactNode, createContext, useContext, useState } from 'react';
import { IImageData } from '../types/prediction';

interface IPredictionData {
  predictionResult: IImageData[];
  setPredictionResult: React.Dispatch<React.SetStateAction<IImageData[]>>;
}

const PredictionContext = createContext<IPredictionData | undefined>(undefined);

export const usePrediction = () => {
  const context = useContext(PredictionContext);
  if (!context) {
    throw new Error('usePrediction must be used within a PredictionProvider');
  }
  return context;
};

export const PredictionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [predictionResult, setPredictionResult] = useState<IImageData[]>([]);

  return (
    <PredictionContext.Provider value={{ predictionResult, setPredictionResult }}>
      {children}
    </PredictionContext.Provider>
  );
};
