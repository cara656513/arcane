"use client";

import { Champ, Champs } from "@/types/Champion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const fetchRotationData = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data = await res.json();
  return data;
};

type dataObj = {
  latestVer: number;
  freeChamps: [string, Champ][];
};

const Rotation = () => {
  const [data, setData] = useState<dataObj>();

  useEffect(() => {
    fetchRotationData().then((data) => {
      setData(data);
    });
  }, []);

  if (data) {
    return (
      <div className="flex flex-wrap justify-center max-w-6xl">
        {data.freeChamps.map(([key, value]) => (
          <Link
            className="p-10 grid gap-6 place-items-center text-center"
            key={value.key}
            href={`/champions/${value.id}`}
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/${data.latestVer}/img/champion/${value.image.full}`}
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
