"use client";

import { Champ } from "@/types/Champion";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Image from "next/image";

export type dataObj = {
  latestVer: number;
  freeChamps: [string, Champ][];
};

const fetchRotationData = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data: dataObj = await res.json();
  return data;
};

const Rotation = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ["rotation"],
    queryFn: fetchRotationData,
  });

  if (isPending) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return (
    <div className="flex flex-wrap justify-center max-w-6xl">
      {data.freeChamps.map(([_, value]) => (
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
};

export default Rotation;
