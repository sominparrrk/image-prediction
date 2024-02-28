import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import { Main } from './containers/Main';
import { TabProvider } from './context/TabContext';
import { SelectedImagesProvider } from './context/SelectedImagesContext';
import { PredictionProvider } from './context/PredictionContext';

const PredictionApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <TabProvider>
        <SelectedImagesProvider>
          <PredictionProvider>
            <GlobalStyle />
            <Main />
          </PredictionProvider>
        </SelectedImagesProvider>
      </TabProvider>
    </ThemeProvider>
  );
};

export default PredictionApp;
