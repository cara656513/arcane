type image = {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
};

type gold = { base: number; purchasable: boolean; total: number; sell: number };

type maps = {
  [key: string]: boolean;
};

type stats = { FlatMagicDamageMod: number };

type Item = {
  name: string;
  description: string;
  colloq: string;
  plaintext: string;
  specialRecipe: number;
  image: image;
  gold: gold;
  tags: string[];
  maps: maps;
  stats: stats;
};

export type Items = {
  [key: string]: Item;
};
