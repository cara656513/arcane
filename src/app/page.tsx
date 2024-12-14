import Link from "next/link";

export default function Home() {
  return (
    <div className="grid text-center justify-center">
      <img src="/line.png" />
      <Link href="/champions">챔피언 목록 보기</Link>
      <Link href="/items">아이템 목록 보기</Link>
      <Link href="/rotation">금주 로테이션 확인</Link>
    </div>
  );
}
