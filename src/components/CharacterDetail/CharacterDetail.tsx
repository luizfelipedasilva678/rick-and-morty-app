import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  character: Character;
  episodes: Episode[];
}

const CharacterDetail = ({ character, episodes }: Props) => {
  const {
    image,
    gender,
    species,
    status,
    name,
    origin: { name: originName },
  } = character;

  return (
    <Box
      component={'section'}
      sx={{
        backgroundColor: 'primary.main',
        borderRadius: '8px',
        width: '100%',
        display: 'flex',
      }}
      className="sm:flex-col"
    >
      <Image
        src={image}
        alt={name}
        width={300}
        height={300}
        className="rounded-tl-lg rounded-bl-lg max-h-80 sm:self-center rounded-tr-lg rounded-br-lg mt-4 ml-4 mb-4 sm:ml-0"
      />
      <Box
        component={'div'}
        sx={{ padding: '24px' }}
        data-testid="character-detailed-infos"
      >
        <Typography className="text-white text-lg mb-5">{name}</Typography>
        <Typography className="text-white text-base  mb-1">
          Origin location: {originName}
        </Typography>
        <Typography className="text-white text-base  mb-1">
          Gender: {gender}
        </Typography>
        <Typography className="text-white text-base  mb-1">
          Status: {status}
        </Typography>
        <Typography className="text-white text-base  mb-1">
          Specie: {species}
        </Typography>
        <Box sx={{ marginTop: '16px' }}>
          <Typography className="text-white text-lg mb-1">Episodes</Typography>
          <Box
            sx={{
              marginTop: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            {episodes.map((episode) => (
              <Typography
                className="text-white text-base  mb-1"
                key={episode.id}
                data-testid="episode"
              >
                {episode.name} - {episode.episode}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CharacterDetail;
