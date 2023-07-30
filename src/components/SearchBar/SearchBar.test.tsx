import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn(),
  }),
  usePathname: jest.fn().mockReturnValue('/'),
}));

describe('SearchBar', () => {
  it('shoudl render correctly', () => {
    const sut = render(<SearchBar />);

    expect(sut).toBeDefined();
  });
});
