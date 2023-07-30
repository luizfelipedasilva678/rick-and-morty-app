export const buildEpisodesIdsStr = (episode: string[]) => {
  return episode.map((episode) => episode.split('/')[5]).join(',');
};
