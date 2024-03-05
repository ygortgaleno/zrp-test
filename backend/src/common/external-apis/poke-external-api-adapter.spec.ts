import { Axios, AxiosError, AxiosHeaders } from 'axios';
import { PokeExternalApiAdapter } from './poke-external-api-adapter';
import { NotFoundException } from '@nestjs/common';

describe('PokeExternalApiAdapter', () => {
  describe('on success', () => {
    jest.spyOn(Axios.prototype, 'get').mockResolvedValueOnce({
      data: {
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
      },
    });
    const sut = new PokeExternalApiAdapter();

    it('should return pokemon', async () => {
      const pokemon = await sut.findPokemon('test');
      expect(pokemon.name).toBe('test');
      expect(pokemon.imageUrl).toBe('test_sprite_default');
      expect(pokemon.abilities).toEqual([
        {
          name: 'test_ability_name',
        },
      ]);
    });
  });

  describe('on error', () => {
    describe('when axios throws 404', () => {
      jest.spyOn(Axios.prototype, 'get').mockRejectedValueOnce(
        new AxiosError(undefined, undefined, undefined, undefined, {
          data: null,
          status: 404,
          statusText: 'error',
          headers: {},
          config: { headers: new AxiosHeaders() },
        }),
      );
      const sut = new PokeExternalApiAdapter();

      it('should throw not found exception', async () => {
        await expect(sut.findPokemon('test')).rejects.toThrow(
          NotFoundException,
        );
      });
    });

    describe('when axios throws unhandled error', () => {
      jest.spyOn(Axios.prototype, 'get').mockRejectedValueOnce(new Error());
      const sut = new PokeExternalApiAdapter();

      it('should throw error', async () => {
        await expect(sut.findPokemon('test')).rejects.toThrow(Error);
      });
    });
  });
});
