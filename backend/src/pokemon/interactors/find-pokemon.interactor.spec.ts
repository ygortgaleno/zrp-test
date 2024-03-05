import { PokeExternalApi } from '../../common/abstractions/poke-external-api';
import { FindPokemonInteractor } from './find-pokemon.interactor';
class PokeApiMock implements PokeExternalApi {
  async findPokemon(): Promise<Record<string, any>> {
    return {
      sprites: {
        front_default: 'test_sprite_default',
      },
      abilities: [
        {
          ability: {
            name: 'test_ability_name',
          },
        },
      ],
    };
  }
}

const makeSut = () => {
  const pokeApiMock = new PokeApiMock();
  const sut = new FindPokemonInteractor(pokeApiMock);
  return { pokeApiMock, sut };
};

describe('FindPokemonInteractor', () => {
  describe('on success', () => {
    const { sut, pokeApiMock } = makeSut();
    jest.spyOn(pokeApiMock, 'findPokemon');

    it('should return pokemon', async () => {
      const pokemonName = 'pokemonName';
      const pokemon = await sut.execute(pokemonName);

      expect(pokemon.name).toBe(pokemonName);
      expect(pokemon.imageUrl).toBe('test_sprite_default');
      expect(pokemon.abilities.length).toBe(1);
      expect(pokemon.abilities.at(0)).toEqual({ name: 'test_ability_name' });
      expect(pokeApiMock.findPokemon).toHaveBeenCalledWith(pokemonName);
    });
  });

  describe('on error', () => {
    describe('when poke external api throws', () => {
      const { sut, pokeApiMock } = makeSut();
      jest.spyOn(pokeApiMock, 'findPokemon').mockRejectedValueOnce(new Error());

      it('should throw error', async () => {
        const pokemonName = 'pokemonName';

        await expect(sut.execute(pokemonName)).rejects.toThrow();
        expect(pokeApiMock.findPokemon).toHaveBeenCalledWith(pokemonName);
      });
    });
  });
});
