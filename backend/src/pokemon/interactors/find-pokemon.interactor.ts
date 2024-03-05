import { PokeExternalApi } from '../../common/abstractions/poke-external-api';
import { Pokemon } from '../entities/pokemon.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindPokemonInteractor {
  constructor(private readonly pokeApi: PokeExternalApi) {}

  async execute(name: string): Promise<Pokemon> {
    const response = await this.pokeApi.findPokemon(name);

    const pokemon = new Pokemon({
      name,
      imageUrl: response.sprites.front_default,
      abilities: response.abilities
        .map((e: Record<string, any>) => ({
          name: e.ability.name,
        }))
        .sort((a: Record<'name', string>, b: Record<'name', string>) =>
          a.name.localeCompare(b.name),
        ),
    });

    return pokemon;
  }
}
