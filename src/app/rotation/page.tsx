import React from "react";

const Rotation = async () => {
  const res = await fetch("http://localhost:3000/api/rotation");
  const data = await res.json();
  console.log("data", data);

  return <div>로테이션</div>;
};

export default Rotation;
