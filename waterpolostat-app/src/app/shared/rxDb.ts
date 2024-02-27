import { RxCollection, RxDatabase, RxDocument } from "rxdb";


export interface RxHeroDocumentType {
  name: string;
  color: string;
  maxHP: number;
  hp: number;
  team?: string;
  skills: Array<{
    name?: string;
    damage?: string;
  }>;
}

// ORM methods
interface RxHeroDocMethods {
  hpPercent(): number;
}

export type RxHeroDocument = RxDocument<RxHeroDocumentType, RxHeroDocMethods>;

export type RxHeroCollection = RxCollection<RxHeroDocumentType, RxHeroDocMethods, {}>;

export interface RxHeroesCollections {
  hero: RxHeroCollection;
}

export type RxHeroesDatabase = RxDatabase<RxHeroesCollections>;
