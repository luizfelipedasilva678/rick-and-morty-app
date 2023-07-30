import { render } from '@testing-library/react';
import { characterCard, episodeMock } from '../../mocks';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail', () => {
  it('should render correctly', () => {
    const sut = render(
      <CharacterDetail character={characterCard} episodes={episodeMock} />
    );

    expect(sut).toBeDefined();
  });

  it('should render 1 episode', () => {
    const sut = render(
      <CharacterDetail character={characterCard} episodes={episodeMock} />
    );

    const episodesList = sut.queryAllByTestId('episode');

    expect(episodesList.length).toEqual(1);
  });

  it('should render details block infos', () => {
    const sut = render(
      <CharacterDetail character={characterCard} episodes={episodeMock} />
    );

    const detailsBlock = sut.queryByTestId('character-detailed-infos');

    expect(detailsBlock).toBeDefined();
  });
});
