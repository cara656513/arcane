import { getChampDetail, getVersion } from "@/utils/serverApi";

type Props = {
  params: {
    id: string;
  };
};

const DetailPage = async ({ params }: Props) => {
  const version = await getVersion();
  const latestVer = version[0];
  const data = await getChampDetail(latestVer, params.id);

  return <div>{JSON.stringify(data)}</div>;
};

export default DetailPage;
