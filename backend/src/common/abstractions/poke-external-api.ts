import { Pokemon } from '../../pokemon/entities/pokemon.entity';

export abstract class PokeExternalApi {
  abstract findPokemon(name: string): Promise<Pokemon>;
}
