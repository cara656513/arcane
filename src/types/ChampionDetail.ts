type Image = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type Info = {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
};

type Stats = {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
};

type Passive = {
  name: string;
  description: string;
  image: [Object];
};

type NestedArray = object[][];

type ChampDetailObj = {
  id: string;
  key: string;
  name: string;
  title: string;
  image: Image;
  skins: NestedArray;
  lore: string;
  blurb: string;
  allytips: string[];
  enemytips: string[];
  tags: string[];
  partype: string;
  info: Info;
  stats: Stats;
  spells: NestedArray;
  passive: Passive;
  recommended: [];
};

export type ChampDetail = {
  [key: string]: ChampDetailObj;
};