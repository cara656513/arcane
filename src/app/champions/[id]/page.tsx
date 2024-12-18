import { ChampDetail, ChampDetailObj } from "@/types/ChampionDetail";
import { getChampDetail, getVersion } from "@/utils/serverApi";
import Image from "next/image";
import Stat from "@/components/Stat";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `챔피언: ${params.id}`,
    description: `챔피언: ${params.id}`,
  };
}

const DetailPage = async ({ params }: Props) => {
  const version = await getVersion();
  const latestVer = version![0];
  const id = params.id;
  const data: ChampDetail = await getChampDetail(latestVer, id);
  const champ: ChampDetailObj = data[id];

  return (
    <div className="text-center grid gap-7 place-items-center max-w-2xl">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/champion/${champ.image.full}`}
        alt="champion"
        width={150}
        height={150}
      />
      <Image width={200} height={200} src="/champline.png" alt="line" />
      <h1 className="font-extrabold text-xl">{champ.name}</h1>
      <div>{champ.title}</div>
      <div>{champ.lore}</div>
      <Stat info={champ.info} />
    </div>
  );
};

export default DetailPage;
