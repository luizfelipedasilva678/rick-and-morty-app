'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

interface Props {
  character: Character;
}

const CharacterCard = ({ character }: Props) => {
  const {
    image,
    name,
    status,
    species,
    origin: { name: originName },
  } = character;

  return (
    <Box className="flex cursor-pointer">
      <Image
        src={image}
        alt={name}
        width={220}
        height={220}
        className="rounded-tl-md rounded-bl-md"
      />
      <Box className="bg-primary w-full rounded-tr-md rounded-br-md p-4 flex flex-col">
        <Typography className="text-white text-3xl mb-5">{name}</Typography>
        <Typography className="text-white text-3xl  mb-1">
          Origin location: {originName}
        </Typography>
        <Typography className="text-white text-3xl  mb-1">
          Status: {status}
        </Typography>
        <Typography className="text-white text-3xl  mb-1">
          Specie: {species}
        </Typography>
      </Box>
    </Box>
  );
};

export default CharacterCard;
