import { render } from '@testing-library/react';
import PaginationBox from './PaginationBox';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn(),
  }),
  usePathname: jest.fn().mockReturnValue('/'),
}));

describe('PaginationBox', () => {
  it('should render correctly', () => {
    const sut = render(<PaginationBox numberOfPages={9} />);

    expect(sut).toBeDefined();
  });

  it('should render correctly', () => {
    const sut = render(<PaginationBox numberOfPages={9} />);

    const { container } = sut;

    expect(
      container.querySelectorAll('.MuiPaginationItem-root').length
    ).toEqual(6);
  });
});
