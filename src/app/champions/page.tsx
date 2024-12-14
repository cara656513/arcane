import { Champs } from "@/types/Champion";
import { getChamps, getVersion } from "@/utils/serverApi";
import Link from "next/link";
import React from "react";

const Champion = async () => {
  const version = await getVersion();
  const latestVer = version[0];
  const data: Champs = await getChamps(latestVer);

  return (
    <div className="flex flex-wrap">
      {Object.entries(data).map(([key, value]) => (
        <div className="p-10" key={key}>
          <Link href={`/champions/${value.id}`}>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/champion/${value.image.full}`}
            />
            <img className="h-4" src="/champline.png" />
            <h1>{value.name}</h1>
            <div>{value.title}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Champion;
