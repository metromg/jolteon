import { type NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/common/layout";
import Loading from "~/components/common/loading";
import Error from "~/components/common/error";
import { api } from "~/utils/api";

const Detail: NextPage = () => {
  const { query } = useRouter();

  const { isLoading, isError, data } = api.codeSnippet.get.useQuery(
    {
      id: query.id as string,
    },
    { enabled: !!query.id }
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !data) {
    return <Error />;
  }

  // TODO: Styling, Syntax Highlighting
  return (
    <Layout>
      <p className="text-white">{data.content}</p>
    </Layout>
  );
};

export default Detail;
