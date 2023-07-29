import CharactersDisplay from '../components/CharactersDisplay';
import PaginationBox from '../components/PaginationBox';
import rickAndMortyService from '../services/rick-and-morty-service';
import { getPageNumber } from '../utils/get-page-number';

export default async function Index({ searchParams }: PageProps) {
  const page = getPageNumber(searchParams);
  const searchResult = await rickAndMortyService.getAllCharacters({ page });

  return (
    <main className="flex flex-col items-center p-4">
      <CharactersDisplay characters={searchResult.results} />
      <PaginationBox />
    </main>
  );
}
