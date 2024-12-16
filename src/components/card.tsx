import { ChampVerObj } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardList = ({ champs, latestVer }: ChampVerObj) => {
  return (
    <div className="flex flex-wrap justify-center max-w-6xl">
      {champs.map(([_, value]) => (
        <Link
          className="p-10 grid gap-6 place-items-center text-center"
          key={value.key}
          href={`/champions/${value.id}`}
        >
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/champion/${value.image.full}`}
            alt="champion"
            width={120}
            height={120}
          />
          <Image width={200} height={200} src="/champline.png" alt="line" />
          <div>
            <h1 className="font-extrabold text-xl">{value.name}</h1>
            <div>{value.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CardList;
