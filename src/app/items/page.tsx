import { Items } from "@/types/Item";
import { getItems, getVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "아이템",
  description: "리그 오브 레전드 아이템 목록",
};

const ItemsPage = async (): Promise<React.JSX.Element> => {
  const version = await getVersion();
  const latestVer = version![0];
  const data: Items = await getItems(latestVer);

  return (
    <div className="flex flex-wrap justify-center max-w-6xl">
      {Object.entries(data).map(([key, value]) => (
        <Link
          className="p-10 grid gap-6 place-items-center text-center"
          key={key}
          href={`/items/${key}`}
        >
          <img
            src={`
              https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/item/${value.image.full}
              `}
            alt="item"
            width={100}
            height={100}
          />
          <Image width={200} height={200} src="/champline.png" alt="line" />
          <div>
            <h1 className="max-w-44 font-extrabold text-xl">{value.name}</h1>
            <div className="max-w-44 min-h-12">{value.plaintext}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ItemsPage;
