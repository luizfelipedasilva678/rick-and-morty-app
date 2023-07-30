import CharactersDisplay from '../components/CharactersDisplay';
import PaginationBox from '../components/PaginationBox';

interface Props {
  searchResult: SearchResult<Character>;
}

const App = ({ searchResult }: Props) => {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <CharactersDisplay characters={searchResult.results} />
      <PaginationBox numberOfPages={searchResult.info.pages} />
    </main>
  );
};

export default App;
