import { Info } from "@/types/Champion";
import React from "react";

type Obj = {
  info: Info;
};

const Stat = ({ info }: Obj) => {
  return (
    <div className="grid place-items-start">
      {Object.entries(info).map((anInfo) => (
        <div className="flex gap-4" key={anInfo[0]}>
          <div className="min-w-20">{anInfo[0]}</div>
          <div className="flex">
            {Array.from({ length: anInfo[1] }).map((_, index) => (
              <div key={index}>▌</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stat;
