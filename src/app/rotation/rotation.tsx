"use client";

import React, { useEffect, useState } from "react";
import { Champ } from "@/types/Champion";
import CardList from "../../components/card";
import { useQuery } from "@tanstack/react-query";

export type dataObj = {
  latestVer: number;
  freeChamps: [string, Champ][];
};

const fetchRotationData = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data = await res.json();
  return data;
};

const Rotation = () => {
  // const [data, setData] = useState<dataObj>();

  // useEffect(() => {
  //   fetchRotationData().then((data) => {
  //     setData(data);
  //   });
  // }, []);

  const { data, isPending, error } = useQuery({
    queryKey: ["rotation"],
    queryFn: fetchRotationData,
  });

  if (isPending) return <p>로딩중...</p>;
  if (error) return <p>에러 발생: {error.message}</p>;

  return <CardList champs={data.freeChamps} latestVer={data.latestVer} />;
};

export default Rotation;
