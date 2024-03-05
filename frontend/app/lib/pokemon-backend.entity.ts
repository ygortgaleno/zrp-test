export interface Pokemon {
    name: string;
    imageUrl: string;
    abilities: Record<'name', string>[];
}
  