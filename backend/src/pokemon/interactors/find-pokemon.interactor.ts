import { PokeExternalApi } from '../../common/abstractions/poke-external-api';
import { Pokemon } from '../entities/pokemon.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindPokemonInteractor {
  constructor(private readonly pokeApi: PokeExternalApi) {}

  async execute(name: string): Promise<Pokemon> {
    const pokemon = await this.pokeApi.findPokemon(name);
    pokemon.abilities = pokemon.abilities.sort(
      (a: Record<'name', string>, b: Record<'name', string>) =>
        a.name.localeCompare(b.name),
    );

    return pokemon;
  }
}
