import { Metadata } from "next";
import Rotation from "./rotation";

export const metadata: Metadata = {
  title: "로테이션",
  description: "리그 오브 레전드 로테이션 목록",
};

const RotationPage = () => {
  return (
    <div>
      <Rotation />
    </div>
  );
};

export default RotationPage;
