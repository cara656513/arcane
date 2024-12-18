import { Champs } from "@/types/Champion";
import { getChamps, getVersion } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  //API 키에 대한 에러 처리
  if (!process.env.RIOT_API_KEY) {
    return NextResponse.json({
      error: "API key가 없습니다.",
    });
  }

  try {
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

    //fetch 응답에 의한 에러 처리
    if (data.status) {
      return NextResponse.json(data.status);
    }

    const freeChampkeys = data.freeChampionIds;
    const freeChamps = Object.entries(champs).filter(([key, value]) =>
      freeChampkeys.includes(+value.key)
    );

    return NextResponse.json({ latestVer, freeChamps });
  } catch (error) {
    return NextResponse.json({ error: "서버에서 에러가 발생했습니다." });
  }
}
