import { ChampDetail } from "@/types/ChampionDetail";
import { getChampDetail, getVersion } from "@/utils/serverApi";

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = async ({ params }: Props) => {
  const version = await getVersion();
  const latestVer = version[0];
  const id = params.id;
  const data: ChampDetail = await getChampDetail(latestVer, id);
  const champ = data[id];
  return (
    <div className="text-center grid gap-8 place-items-center max-w-2xl py-10">
      <img
        src={`https://ddragon.leagueoflegends.com/cdn/${latestVer}/img/champion/${champ.image.full}`}
      />
      <img className="h-4" src="/champline.png" />
      <h1 className="font-extrabold text-xl">{champ.name}</h1>
      <div>{champ.title}</div>
      <div>{champ.lore}</div>
    </div>
  );
};

export default DetailPage;
