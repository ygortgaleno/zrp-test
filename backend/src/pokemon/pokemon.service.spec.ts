import { Test, TestingModule } from '@nestjs/testing';
import { PokemonService } from './pokemon.service';
import { FindPokemonInteractor } from './interactors/find-pokemon.interactor';
import { CommonModule } from '../common/common.module';

describe('PokemonService', () => {
  let service: PokemonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CommonModule],
      providers: [PokemonService, FindPokemonInteractor],
    }).compile();

    service = module.get<PokemonService>(PokemonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
