import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render correctly', () => {
    const sut = render(<Footer />);

    expect(sut).toBeDefined();
  });

  it('should render with correct text', async () => {
    const sut = render(<Footer />);

    expect(sut.findByText('Rick and Morty App')).toBeDefined();
  });

  it('should render link correctly', async () => {
    const sut = render(<Footer />);

    expect(sut.findByTestId('github-link')).toBeDefined();
  });

  it('should render copy right infos correctly', async () => {
    const sut = render(<Footer />);

    expect(sut.findByTestId('copyright-box')).toBeDefined();
  });
});
