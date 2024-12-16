import { Items } from "@/types/Item";
import { getItems, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItemsPage = async () => {
  const version = await getVersion();
  const latestVer = version[0];
  const data: Items = await getItems(latestVer);

  return (
    <div className="flex flex-wrap justify-center max-w-6xl">
      {Object.entries(data).map(([key, value]) => (
        <div
          className="p-10 grid gap-6 place-items-center text-center"
          key={key}
        >
          <Image
            src={`
              https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/item/${value.image.full}
              `}
            alt="item"
            width={100}
            height={100}
          />
          <Image width={200} height={200} src="/champline.png" alt="line" />
          <div>
            <h1 className="font-extrabold text-xl">{value.name}</h1>
            <div className="max-w-44 min-h-12">{value.plaintext}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsPage;
