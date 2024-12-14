import { Champs } from "@/types/Champion";
import { getChamps, getVersion } from "@/utils/serverApi";
import Link from "next/link";
import React from "react";

const Champion = async () => {
  const version = await getVersion();
  const latestVer = version[0];
  const data: Champs = await getChamps(latestVer);

  return (
    <div className="flex flex-wrap justify-center max-w-6xl">
      {Object.entries(data).map(([key, value]) => (
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

export default Champion;
