import { render, screen } from '@testing-library/react';
import App from './App';

test('Hi There', () => {
  render(<App/>);
  const linkElement = screen.getByText(/Hi There/i);
  expect(linkElement).toBeInTheDocument();
});



