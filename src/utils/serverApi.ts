"use server";

export async function getVersion() {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data = await res.json();

  return data;
}

export async function getChamps(latestVer: string) {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVer}/data/ko_KR/champion.json`
  );
  const data = await res.json();

  return data.data;
}

export async function getChampDetail(latestVer: string, champId: string) {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${latestVer}/data/ko_KR/champion/${champId}.json`
  );
  const data = await res.json();

  return data.data;
}
