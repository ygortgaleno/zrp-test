export class Pokemon {
  name: string;
  imageUrl: string;
  abilities: Record<'name', string>[];

  constructor(data: Pokemon) {
    Object.assign(this, data);
  }
}
