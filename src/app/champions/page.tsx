import ChampList from "@/components/ChampList";
import { Champs } from "@/types/Champion";
import { getChamps, getVersion } from "@/utils/serverApi";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "챔피언",
  description: "리그 오브 레전드 챔피언 목록",
};

const Champion = async () => {
  const version = await getVersion();
  const latestVer = version[0];
  const data: Champs = await getChamps(latestVer);
  const dataArr = Object.entries(data);

  return <ChampList champs={dataArr} latestVer={latestVer} />;
};

export default Champion;
