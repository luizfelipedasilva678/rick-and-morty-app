import App from '../container/App';
import rickAndMortyService from '../services/rick-and-morty-service';
import { getPageNumber } from '../utils/get-page-number';

export default async function Index({ searchParams }: PageProps) {
  const page = getPageNumber(searchParams);
  const searchResult = await rickAndMortyService.getAllCharacters({ page });

  return <App searchResult={searchResult} />;
}
