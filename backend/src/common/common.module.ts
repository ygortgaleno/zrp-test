import { Module } from '@nestjs/common';
import { PokeExternalApi } from './abstractions/poke-external-api';
import { PokeExternalApiAdapter } from './external-apis/poke-external-api-adapter';

@Module({
  providers: [
    {
      provide: PokeExternalApi,
      useClass: PokeExternalApiAdapter,
    },
  ],
  exports: [
    {
      provide: PokeExternalApi,
      useClass: PokeExternalApiAdapter,
    },
  ],
})
export class CommonModule {}
