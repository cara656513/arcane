import Detail from "@/components/detail";
import { ChampDetail, ChampDetailObj } from "@/types/ChampionDetail";
import { getChampDetail, getVersion } from "@/utils/serverApi";

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
  const latestVer = version[0];
  const id = params.id;
  const data: ChampDetail = await getChampDetail(latestVer, id);
  const champ: ChampDetailObj = data[id];

  return <Detail champ={champ} latestVer={latestVer} mode={"champion"} />;
};

export default DetailPage;
