"use client";

import { useQuery } from "@tanstack/react-query";
import { ChampRotationObj } from "@/types/ChampionRotation";
import ChampList from "@/components/ChampList";

const fetchRotationData = async () => {
  const res = await fetch("https://arcane-pink.vercel.app/api/rotation");
  const data: ChampRotationObj = await res.json();
  return data;
};

const Rotation = () => {
  const { data, isPending, error } = useQuery<
    ChampRotationObj,
    Error,
    ChampRotationObj,
    [string]
  >({
    queryKey: ["rotation"],
    queryFn: fetchRotationData,
  });

  if (isPending) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return <ChampList champs={data.freeChamps} latestVer={data.latestVer} />;
};

export default Rotation;
