import { render } from '@testing-library/react';
import PaginationBox from './PaginationBox';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn(),
  }),
}));

describe('PaginationBox', () => {
  it('should render correctly', () => {
    const sut = render(<PaginationBox />);

    expect(sut).toBeDefined();
  });

  it('should render correctly', () => {
    const sut = render(<PaginationBox />);

    const { container } = sut;

    expect(
      container.querySelectorAll('.MuiPaginationItem-root').length
    ).toEqual(9);
  });
});
