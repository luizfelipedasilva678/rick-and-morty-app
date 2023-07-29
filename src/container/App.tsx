import CharactersDisplay from '../components/CharactersDisplay';
import PaginationBox from '../components/PaginationBox';

interface Props {
  characters: Character[];
}

const App = ({ characters }: Props) => {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <CharactersDisplay characters={characters} />
      <PaginationBox />
    </main>
  );
};

export default App;
