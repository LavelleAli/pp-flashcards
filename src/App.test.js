import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the first flashcard question', () => {
  render(<App />);
  expect(
    screen.getByText(/what is the difference between let and var\?/i)
  ).toBeInTheDocument();
});
