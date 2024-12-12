import { getChamps, getVersion } from "@/utils/serverApi";
import React from "react";

const Champion = async () => {
  const version = await getVersion();
  const latestVer = version[0];

  const data = await getChamps(latestVer);

  return (
    <div>
      {Object.entries(data.data).map(([key, value]) => (
        <>
          <div>이름: {key}</div>
          <div>설명: {value.blurb}</div>
        </>
      ))}
    </div>
  );
};

export default Champion;
