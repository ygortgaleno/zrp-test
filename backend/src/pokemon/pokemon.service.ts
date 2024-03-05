import { Injectable } from '@nestjs/common';
import { FindPokemonInteractor } from './interactors/find-pokemon.interactor';

@Injectable()
export class PokemonService {
  constructor(private readonly findPokemonInteractor: FindPokemonInteractor) {}

  async findOne(name: string) {
    return this.findPokemonInteractor.execute(name);
  }
}
