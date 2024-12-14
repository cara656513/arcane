import { Champs } from "@/types/Champion";
import { getChamps, getVersion } from "@/utils/serverApi";
import Link from "next/link";
import React from "react";

const Rotation = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data = await res.json();
  const freeChampkeys = data.freeChampionIds;

  const version = await getVersion();
  const latestVer = version[0];
  const champsData: Champs = await getChamps(latestVer);

  return (
    <div className="flex flex-wrap justify-center max-w-6xl">
      {Object.entries(champsData)
        .filter(([key, value]) => freeChampkeys.includes(+value.key))
        .map(([key, value]) => (
          <Link
            className="p-10 grid gap-6 place-items-center text-center"
            key={key}
            href={`/champions/${value.id}`}
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/champion/${value.image.full}`}
            />
            <img className="h-4" src="/champline.png" />
            <div>
              <h1 className="font-extrabold text-xl">{value.name}</h1>
              <div>{value.title}</div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Rotation;
