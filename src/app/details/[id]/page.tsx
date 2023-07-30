import CharacterDetails from '../../../container/CharacterDetails';
import rickAndMortyService from '../../../services/rick-and-morty-service';

export default async function Index({ params }: PageProps) {
  const character = await rickAndMortyService.getCharacterById(
    Number(params.id)
  );

  return <CharacterDetails character={character} />;
}
