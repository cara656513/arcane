import React from "react";

const Champion = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data = await res.json();
  console.log("data", data);

  return <div>챔피언 소리지르는 니가</div>;
};

export default Champion;
