"use client";

import React, { useEffect, useState } from "react";
import { Champ } from "@/types/Champion";
import CardList from "../../components/card";

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
  const [data, setData] = useState<dataObj>();

  useEffect(() => {
    fetchRotationData().then((data) => {
      setData(data);
    });
  }, []);

  if (data) {
    return <CardList champs={data.freeChamps} latestVer={data.latestVer} />;
  }
};

export default Rotation;
