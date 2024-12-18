import { getItems, getVersion } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `아이템 No.${params.id}`,
    description: `아이템 No.${params.id}`,
  };
}

const ItemDetailPage = async ({ params }: Props) => {
  const version = await getVersion();
  const latestVer = version[0];
  const id = params.id;
  const data = await getItems(latestVer);
  const theData = data[id];

  return (
    <div className="text-center grid gap-7 place-items-center max-w-2xl py-28">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/item/${theData.image.full}`}
        alt="champion"
        width={150}
        height={150}
      />
      <Image width={200} height={200} src="/champline.png" alt="line" />
      <h1 className="font-extrabold text-xl">{theData.name}</h1>
      <div>{theData.plaintext}</div>
      <div>
        <div>가격: {theData.gold.total}골드</div>
        <div>판매: {theData.gold.sell}골드</div>
      </div>
    </div>
  );
};

export default ItemDetailPage;
