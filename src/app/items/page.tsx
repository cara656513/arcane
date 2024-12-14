import { Items } from "@/types/Item";
import { getItems, getVersion } from "@/utils/serverApi";
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
          <img
            src={`
              https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/item/${value.image.full}
              `}
          />
          <img className="h-4" src="/champline.png" />
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
