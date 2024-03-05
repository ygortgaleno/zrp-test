export abstract class PokeExternalApi {
  abstract findPokemon(name: string): Promise<Record<string, any>>;
}
