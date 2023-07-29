import { Box } from '@mui/material';
import CharacterCard from '../CharacterCard/CharacterCard';

interface Props {
  characters: Character[];
}

const CharactersDisplay = ({ characters }: Props) => {
  return (
    <Box component={'div'} className={'grid grid-cols-3 gap-4 w-full'}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </Box>
  );
};

export default CharactersDisplay;
