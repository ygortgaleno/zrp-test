import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { CommonModule } from '../common/common.module';
import { FindPokemonInteractor } from './interactors/find-pokemon.interactor';

@Module({
  imports: [CommonModule],
  controllers: [PokemonController],
  providers: [PokemonService, FindPokemonInteractor],
})
export class PokemonModule {}
