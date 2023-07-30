import { render } from '@testing-library/react';
import { characterCards } from '../../mocks';
import CharactersDisplay from './CharactersDisplay';

describe('CharactersDisplay', () => {
  it('shoudl render correctly', () => {
    const sut = render(<CharactersDisplay characters={characterCards} />);

    expect(sut).toBeDefined();
  });

  it('shoudl render 4 cards', () => {
    const sut = render(<CharactersDisplay characters={characterCards} />);

    expect(sut.queryAllByTestId('character-card').length).toEqual(4);
  });
});
