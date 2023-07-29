import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('shoudl render correctly', () => {
    const sut = render(<Header />);

    expect(sut).toBeDefined();
  });

  it('shoudl render with correct text', () => {
    const sut = render(<Header />);

    const h6 = sut.queryByText('Rick and Morty App');

    expect(h6).toBeDefined();
  });
});
