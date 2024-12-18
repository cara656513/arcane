"use server";

import { Champs } from "@/types/Champion";
import { ChampDetail } from "@/types/ChampionDetail";
import { Items } from "@/types/Item";

export async function getVersion(): Promise<string[] | null> {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data: string[] = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching version data:", error);
    return null;
  }
}

export async function getChamps(latestVer: string): Promise<Champs> {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVer}/data/ko_KR/champion.json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  );
  const data = await res.json();

  return data.data;
}

export async function getChampDetail(
  latestVer: string,
  champId: string
): Promise<ChampDetail> {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVer}/data/ko_KR/champion/${champId}.json`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.data;
}

export async function getItems(latestVer: string): Promise<Items> {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVer}/data/ko_KR/item.json`
  );
  const data = await res.json();

  return data.data;
}
