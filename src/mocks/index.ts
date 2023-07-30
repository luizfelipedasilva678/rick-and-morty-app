export const characterCard = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive' as Status,
  species: 'Human',
  type: '',
  gender: 'Male' as Gender,
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
    'https://rickandmortyapi.com/api/episode/3',
    'https://rickandmortyapi.com/api/episode/4',
    'https://rickandmortyapi.com/api/episode/5',
    'https://rickandmortyapi.com/api/episode/6',
    'https://rickandmortyapi.com/api/episode/7',
    'https://rickandmortyapi.com/api/episode/8',
    'https://rickandmortyapi.com/api/episode/9',
    'https://rickandmortyapi.com/api/episode/10',
    'https://rickandmortyapi.com/api/episode/11',
    'https://rickandmortyapi.com/api/episode/12',
    'https://rickandmortyapi.com/api/episode/13',
    'https://rickandmortyapi.com/api/episode/14',
    'https://rickandmortyapi.com/api/episode/15',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

export const characterCards = [
  characterCard,
  { ...characterCard, id: 2 },
  { ...characterCard, id: 3 },
  { ...characterCard, id: 4 },
];
