import { render, screen } from '@testing-library/react';
import App from './App';

test('renders DockerHub Image link', () => {
  render(<App />);
  const linkElement = screen.getByText(/DockerHub Image/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Github project Image link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Github project/i);
  expect(linkElement).toBeInTheDocument();
});
