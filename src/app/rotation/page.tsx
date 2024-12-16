"use client";

import { Champ, Champs } from "@/types/Champion";
import Image from "next/image";
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
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${data.latestVer}/img/champion/${value.image.full}`}
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
  }
};

export default Rotation;
