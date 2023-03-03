import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Error from "~/components/common/error";
import Layout from "~/components/common/layout";
import Spinner from "~/components/common/spinner";
import { api } from "~/utils/api";

type CodeSnippetForm = {
  content: string;
};

const Home: NextPage = () => {
  const [form, setForm] = useState<CodeSnippetForm>({ content: "" });
  const createCodeSnippet = api.codeSnippet.create.useMutation();
  const router = useRouter();

  if (createCodeSnippet.isError) {
    return <Error />;
  }

  // TODO: Styling, Preview, Handle Tab in Textarea, Additional options
  return (
    <Layout>
      <div className="flex flex-col items-stretch justify-center gap-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createCodeSnippet.mutate(
              { ...form },
              {
                onSuccess: ({ id }) => void router.push("/" + id),
              }
            );
          }}
          className="flex flex-col gap-1"
        >
          <label className="text-white">
            New Code Snippet
            <textarea
              className="h-40 w-full resize-y rounded-md p-4 font-mono text-black"
              placeholder="Paste your code here..."
              required
              maxLength={4096}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
            ></textarea>
          </label>
          <button
            type="submit"
            disabled={createCodeSnippet.isLoading}
            className="flex items-center justify-center gap-1 rounded-md bg-white p-4 text-black hover:bg-slate-300 disabled:bg-slate-200"
          >
            {createCodeSnippet.isLoading && (
              <div className="h-4 w-4">
                <Spinner />
              </div>
            )}
            Submit
          </button>
        </form>
        <p className="text-white">Preview TODO</p>
      </div>
    </Layout>
  );
};

export default Home;
