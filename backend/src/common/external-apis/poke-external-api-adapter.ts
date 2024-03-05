import { Pokemon } from '../../pokemon/entities/pokemon.entity';
import { PokeExternalApi } from '../abstractions/poke-external-api';
import axios, { Axios, isAxiosError } from 'axios';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PokeExternalApiAdapter implements PokeExternalApi {
  private readonly axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.POKE_API_URL, // TODO put url inside .env
    });
  }

  async findPokemon(name: string): Promise<Pokemon> {
    try {
      const { data: response } = await this.axios.get(
        `pokemon/${name.toLowerCase()}`,
      );

      const pokemon = new Pokemon({
        name,
        imageUrl: response.sprites.front_default,
        abilities: response.abilities.map((e: Record<string, any>) => ({
          name: e.ability.name,
        })),
      });

      return pokemon;
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.response.status === 404) {
          throw new NotFoundException(`Pokemon(${name}) not found`);
        }
      }

      throw error;
    }
  }
}
