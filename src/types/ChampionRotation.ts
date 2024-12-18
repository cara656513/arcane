import { Champ } from "./Champion";

export type ChampRotation = {
  freeChampionIds: Number[];
  freeChampionIdsForNewPlayers: Number[];
  maxNewPlayerLevel: number;
};

export type ChampRotationObj = {
  latestVer: string;
  freeChamps: [string, Champ][];
};
