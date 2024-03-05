import { PokeExternalApi } from '../abstractions/poke-external-api';
import axios, { Axios, isAxiosError } from 'axios';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class PokeExternalApiAdapter implements PokeExternalApi {
  private readonly axios: Axios;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.POKE_API_URL,
    });
  }

  async findPokemon(name: string): Promise<Record<string, any>> {
    try {
      const { data: response } = await this.axios.get(
        `pokemon/${name.toLowerCase()}`,
      );

      return response;
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
