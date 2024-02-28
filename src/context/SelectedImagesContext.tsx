import React, { ReactNode, createContext, useContext, useState } from 'react';
import { IImage } from '../containers/Images/types/image';

interface ISelectedImagesData {
  selectedImages: IImage[];
  setSelectedImages: React.Dispatch<React.SetStateAction<IImage[]>>;
}

const SelectedImagesContext = createContext<ISelectedImagesData | undefined>(undefined);

export const useSelectedImages = () => {
  const context = useContext(SelectedImagesContext);
  if (!context) {
    throw new Error('useSelectedImages must be used within a SelectedImagesProvider');
  }
  return context;
};

export const SelectedImagesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedImages, setSelectedImages] = useState<IImage[]>([]);

  return (
    <SelectedImagesContext.Provider value={{ selectedImages, setSelectedImages }}>
      {children}
    </SelectedImagesContext.Provider>
  );
};
