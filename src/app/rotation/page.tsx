"use client";

import { Champs } from "@/types/Champion";
import { ChampRotation } from "@/types/ChampionRotation";
import { getChamps, getVersion } from "@/utils/serverApi";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const fetchVer = async (): Promise<string> => {
  const version = await getVersion();
  return version[0];
};

const fetchRotationData = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data: ChampRotation = await res.json();
  return data.freeChampionIds;
};

const fetchChampsData = async (latestVer: string) => {
  const champs = await getChamps(latestVer);
  return champs;
};

const Rotation = () => {
  const [latestVer, setLatestVer] = useState<string>();
  const [freeChampkeys, setFreeChampkeys] = useState<Number[]>();
  const [champsData, setChampsData] = useState<Champs>();

  useEffect(() => {
    fetchRotationData().then(setFreeChampkeys);
    fetchVer().then(setLatestVer);
  }, []);

  useEffect(() => {
    if (latestVer) {
      fetchChampsData(latestVer).then(setChampsData);
    }
  }, [latestVer]);

  if (freeChampkeys && champsData) {
    return (
      <div className="flex flex-wrap justify-center max-w-6xl">
        {Object.entries(champsData)
          .filter(([key, value]) => freeChampkeys.includes(+value.key))
          .map(([key, value]) => (
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
  }
};

export default Rotation;
