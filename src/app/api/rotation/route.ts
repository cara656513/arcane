import { Champs } from "@/types/Champion";
import { getChamps, getVersion } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  if (!process.env.RIOT_API_KEY) {
    return NextResponse.json({
      error: "API key가 없습니다.",
    });
  }

  const version = await getVersion();
  const latestVer = version[0];
  const champs: Champs = await getChamps(latestVer);

  const res = await fetch(
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
    {
      headers: {
        "X-Riot-Token": process.env.RIOT_API_KEY!,
      },
    }
  );
  const data = await res.json();
  const freeChampkeys = data.freeChampionIds;
  const freeChamps = Object.entries(champs).filter(([key, value]) =>
    freeChampkeys.includes(+value.key)
  );

  return NextResponse.json({ latestVer, freeChamps });
}
