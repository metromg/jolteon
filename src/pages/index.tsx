import { Transition } from "@headlessui/react";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Error from "~/components/common/error";
import Layout from "~/components/common/layout";
import Form, { type CodeSnippetFormData } from "~/components/form";
import Snippet from "~/components/snippet";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const [formData, setFormData] = useState<CodeSnippetFormData>({
    content: "",
    theme: "a11yDark",
    language: "typescript",
  });
  const createCodeSnippet = api.codeSnippet.create.useMutation();
  const router = useRouter();

  if (createCodeSnippet.isError) {
    return <Error />;
  }

  return (
    <Layout>
      <div className="flex w-full flex-col items-stretch justify-start gap-4">
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
        <Transition
          show={!!formData.content}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <Snippet
            content={formData.content}
            theme={formData.theme}
            language={formData.language}
          />
        </Transition>
      </div>
    </Layout>
  );
};

export default Home;
