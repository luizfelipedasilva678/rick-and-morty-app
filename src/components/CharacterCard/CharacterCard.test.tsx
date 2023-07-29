import { render } from '@testing-library/react';
import { characterCard } from '../../mocks';
import CharacterCard from './CharacterCard';

describe('CharacterCard', () => {
  it('should render correctly', () => {
    const sut = render(<CharacterCard character={characterCard} />);

    expect(sut).toBeDefined();
  });

  it('should render with correct origin text', () => {
    const sut = render(<CharacterCard character={characterCard} />);

    const originText = sut.queryByText('Origin location: Earth (C-137)');

    expect(originText).toBeDefined();
  });

  it('should render with correct status text', () => {
    const sut = render(<CharacterCard character={characterCard} />);

    const statusText = sut.queryByText('Status: Alive');

    expect(statusText).toBeDefined();
  });

  it('should render with correct specie text', () => {
    const sut = render(<CharacterCard character={characterCard} />);

    const specieText = sut.queryByText('Specie: Human');

    expect(specieText).toBeDefined();
  });

  it('should render image', () => {
    const sut = render(<CharacterCard character={characterCard} />);

    const image = sut.queryByTestId('character-img');

    expect(image).toBeDefined();
  });
});
