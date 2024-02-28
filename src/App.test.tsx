import { screen } from '@testing-library/react';
import { render } from './test-utils';
import PredictionApp from './App';

jest.mock('./containers/Main', () => ({
  Main: () => <div>Main</div>,
}));

describe('PredictionApp Component', () => {
  test('renders PredictionApp component', () => {
    render(<PredictionApp />);

    expect(screen.getByText('Main')).toBeInTheDocument();
  });
});
