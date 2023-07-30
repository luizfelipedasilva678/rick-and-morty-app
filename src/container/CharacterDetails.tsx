import CharacterDetail from '../components/CharacterDetail/CharacterDetail';
import rickAndMortyService from '../services/rick-and-morty-service';
import { buildEpisodesIdsStr } from '../utils/build-episodes-ids-str';

interface Props {
  character: Character;
}

const CharacterDetails = async ({ character }: Props) => {
  const { episode } = character;
  const episodesStr = buildEpisodesIdsStr(episode);
  const episodes = await rickAndMortyService.getEpisodesByBatch(episodesStr);

  return (
    <main className="flex flex-col items-center justify-between p-4">
      <CharacterDetail character={character} episodes={episodes} />
    </main>
  );
};

export default CharacterDetails;
