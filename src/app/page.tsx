import Link from "next/link";

const homeMenus = [
  ["챔피언 목록 보기", "/champions"],
  ["아이템 목록 보기", "/items"],
  ["금주 로테이션 확인", "/rotation"],
];

export default function Home() {
  return (
    <div className="text-center grid place-items-center">
      <div className="max-w-2xl text-4xl font-bold py-8">
        "WHERE DO YOU DRAW THE LINE BETWEEN JUSTICE AND VENGEANCE?"
      </div>

      {homeMenus.map((homeMenu) => (
        <>
          <Link
            key={homeMenus.indexOf(homeMenu)}
            className="p-12"
            href={homeMenu[1]}
          >
            {homeMenu[0]}
          </Link>
          <img className="h-5" src="/champline.png" />
        </>
      ))}
    </div>
  );
}
