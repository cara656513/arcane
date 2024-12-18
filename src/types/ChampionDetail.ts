import { Stats } from "fs";
import { Champ, ChampImage, Info } from "./Champion";

type Passive = {
  name: string;
  description: string;
  image: [Object];
};

type NestedArray = object[][];

type addedEntries = {
  skins: NestedArray;
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: NestedArray;
  passive: Passive;
  recommended: [];
};

export type ChampDetailObj = Omit<Champ, "version"> & addedEntries;

export type ChampDetail = {
  [key: string]: ChampDetailObj;
};
