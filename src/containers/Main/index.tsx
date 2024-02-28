import { TabTypes } from '../../types/tabType';
import { Tab } from '../../components/Tab/Tab';
import { Container, TabContainer, Title } from './Main.styles';
import { Images } from '../Images';
import { Predictions } from '../Predictions';
import { useTab } from '../../context/TabContext';

export const Main = () => {
  const { activeTab, setActiveTab } = useTab();

  return (
    <Container>
      <Title>Prediction App</Title>
      <TabContainer>
        <Tab isActive={activeTab === TabTypes.IMAGES} onClick={() => setActiveTab(TabTypes.IMAGES)}>
          Images
        </Tab>
        <Tab isActive={activeTab === TabTypes.PREDICTIONS} onClick={() => setActiveTab(TabTypes.PREDICTIONS)}>
          Predictions
        </Tab>
      </TabContainer>
      {activeTab === TabTypes.IMAGES && <Images />}
      {activeTab === TabTypes.PREDICTIONS && <Predictions />}
    </Container>
  );
};
