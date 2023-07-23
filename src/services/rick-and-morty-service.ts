import { BASE_URL } from '@/src/constants';

export class RickAndMortyService {
  protected readonly baseUrl: string = BASE_URL;

  private static checkResponse(response: Response, message: string): void {
    if (!response.ok) {
      throw new Error(message);
    }
  }

  private static generateFilter(filters: Filters) {
    let filterStr = '';

    if (filters != null) {
      const urlSearchParams = new URLSearchParams(
        filters as Record<string, string>
      );

      filterStr = `/?${urlSearchParams.toString()}`;
    }

    return filterStr;
  }

  private static async makeRequest(url: string, errorMessage: string) {
    const res = await fetch(url);
    RickAndMortyService.checkResponse(res, errorMessage);
    return res.json();
  }

  async getAllCharacters(filters?: CharacterFilter): Promise<Character[]> {
    const filter = RickAndMortyService.generateFilter(filters);

    return RickAndMortyService.makeRequest(
      `${this.baseUrl}/character${filter}`,
      'Failed to fetch all characters'
    );
  }

  async getCharacterById(id: number): Promise<Character> {
    return RickAndMortyService.makeRequest(
      `${this.baseUrl}/character/${id}`,
      `Failed to fetch character ${id}`
    );
  }

  async getAllLocations(filters?: LocationFilter): Promise<Location[]> {
    const filter = RickAndMortyService.generateFilter(filters);

    return RickAndMortyService.makeRequest(
      `${this.baseUrl}/location${filter}`,
      `Failed to fetch all locations`
    );
  }

  async getLocationById(id: number): Promise<Location> {
    return RickAndMortyService.makeRequest(
      `${this.baseUrl}/location/${id}`,
      `Failed to fetch location ${id}`
    );
  }

  async getAllEpisodes(filters?: EpisodeFilter): Promise<Episode[]> {
    const filter = RickAndMortyService.generateFilter(filters);

    return RickAndMortyService.makeRequest(
      `${this.baseUrl}/episode${filter}`,
      `Failed to fetch all episodes`
    );
  }

  async getEpisodeById(id: number): Promise<Episode> {
    return RickAndMortyService.makeRequest(
      `${this.baseUrl}/episode/${id}`,
      `Failed to fetch episode ${id}`
    );
  }
}

const rickAndMortyService = new RickAndMortyService();

export default rickAndMortyService;
