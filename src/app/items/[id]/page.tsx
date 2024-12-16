import Detail from "@/components/detail";
import { getItems, getVersion } from "@/utils/serverApi";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `아이템: ${params.id}`,
    description: `아이템: ${params.id}`,
  };
}

const ItemDetailPage = async ({ params }: Props) => {
  const version = await getVersion();
  const latestVer = version[0];
  const id = params.id;
  const data = await getItems(latestVer);
  const theData = data[id];

  return <Detail champ={theData} latestVer={latestVer} mode={"item"} />;
};

export default ItemDetailPage;
