import type { Metadata } from "next";
import { Pirata_One, Nanum_Gothic } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const pirataOne = Pirata_One({ weight: "400", subsets: ["latin"] });
const nanumGothic = Nanum_Gothic({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Min's Arcane",
  description: "리그 오브 레전드(롤)의 챔피언, 아이템, 로테이션 정보 제공",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nanumGothic.className} bg-black text-white`}>
        <nav
          className={`${pirataOne.className} flex justify-center fixed w-full gap-24 p-6 text-4xl text-pink-200 border-b border-pink-200 bg-zinc-700`}
        >
          <Link href="/">Home</Link>
          <Link href="/champions">Champions</Link>
          <Link href="/items">Items</Link>
          <Link href="/rotation">Rotation</Link>
        </nav>
        <main className="p-40 flex justify-center w-500px">{children}</main>
        <footer className="text-pink-200 border-t border-pink-200 bg-zinc-700 py-3 flex justify-center w-full fixed bottom-0 text-center text-sm max-h-24">
          <p className="max-w-5xl">
            This site is not endorsed by Riot Games and does not reflect the
            views or opinions of Riot Games or anyone officially involved in
            producing or managing Riot Games properties. Riot Games and all
            associated properties are trademarks or registered trademarks of
            Riot Games, Inc.
          </p>
        </footer>
      </body>
    </html>
  );
}
