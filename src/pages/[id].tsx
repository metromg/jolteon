import { type NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "~/components/common/layout";
import Loading from "~/components/common/loading";
import Error from "~/components/common/error";
import { api } from "~/utils/api";
import Snippet from "~/components/snippet";

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

  return (
    <Layout>
      <div className="flex w-full flex-col justify-center">
        <Snippet
          content={data.content}
          theme="a11yDark"
          language="javascript"
        />
      </div>
    </Layout>
  );
};

export default Detail;
