import { type NextPage } from "next";
import { useRouter } from "next/router";
import { z } from "zod";
import Layout from "~/components/layout";
import { api } from "~/utils/api";

const Detail: NextPage = () => {
  const router = useRouter();
  const id = z.string().safeParse(router.query.id);

  const { isLoading, isError, data } = api.codeSnippet.get.useQuery({
    id: id.success ? id.data : "",
  });

  // TODO: Propper loading and error states
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Error!</p>;
  }

  // TODO: Styling, Syntax Highlighting
  return (
    <Layout>
      <p className="text-white">{data.content}</p>
    </Layout>
  );
};

export default Detail;
