import Image from "next/image";
import React from "react";
import Stat from "./stat";
import { ChampDetailObj } from "@/types/ChampionDetail";

type champObj = {
  champ: ChampDetailObj;
  latestVer: string;
  mode: string;
};

const Detail = ({ champ, latestVer, mode }: champObj) => {
  return (
    <div className="text-center grid gap-7 place-items-center max-w-2xl">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/${mode}/${champ.image.full}`}
        alt={mode}
        width={150}
        height={150}
      />
      <Image width={200} height={200} src="/champline.png" alt="line" />
      <h1 className="font-extrabold text-xl">{champ.name}</h1>
      <div>{champ.title}</div>
      <div>{champ.lore}</div>
      {mode === "champion" ? <Stat info={champ.info} /> : ""}
    </div>
  );
};

export default Detail;
