import React, { ReactNode, createContext, useContext, useState } from 'react';
import { TabTypes } from '../types/tabType';

interface ITabData {
  activeTab: TabTypes;
  setActiveTab: React.Dispatch<React.SetStateAction<TabTypes>>;
}

const TabContext = createContext<ITabData | undefined>(undefined);

export const useTab = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
};

export const TabProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<TabTypes>(TabTypes.IMAGES);

  return <TabContext.Provider value={{ activeTab, setActiveTab }}>{children}</TabContext.Provider>;
};
