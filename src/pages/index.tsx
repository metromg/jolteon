import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Error from "~/components/common/error";
import Layout from "~/components/common/layout";
import Form, { type CodeSnippetFormData } from "~/components/form";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [formData, setFormData] = useState<CodeSnippetFormData>({
    content: "",
  });
  const createCodeSnippet = api.codeSnippet.create.useMutation();
  const router = useRouter();

  if (createCodeSnippet.isError) {
    return <Error />;
  }

  // TODO: Styling, Preview
  return (
    <Layout>
      <div className="flex flex-col items-stretch justify-center gap-4">
        <Form
          data={formData}
          onChange={(data) => setFormData(data)}
          onSubmit={() =>
            createCodeSnippet.mutate(
              { ...formData },
              {
                onSuccess: ({ id }) => void router.push("/" + id),
              }
            )
          }
          isSubmitting={createCodeSnippet.isLoading}
        />
        <p className="text-white">Preview TODO</p>
      </div>
    </Layout>
  );
};

export default Home;
