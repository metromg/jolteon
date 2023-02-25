import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Layout from "~/components/layout";
import { api } from "~/utils/api";

type CodeSnippetForm = {
  content: string;
};

const Home: NextPage = () => {
  const [form, setForm] = useState<CodeSnippetForm>({ content: "" });
  const createCodeSnippet = api.codeSnippet.create.useMutation();
  const router = useRouter();

  // TODO: Propper loading and error states
  if (createCodeSnippet.isLoading) {
    return <p>Loading...</p>;
  }

  if (createCodeSnippet.isError) {
    return <p>Error!</p>;
  }

  // TODO: Styling, Preview, Handle Tab in Textarea, Additional options
  return (
    <Layout>
      <h1 className="text-xl text-white">Share your code</h1>
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
          className="rounded-md bg-white p-4 text-black hover:bg-slate-300"
        >
          Submit
        </button>
      </form>
      <h1 className="text-xl text-white">Preview</h1>
      <p className="text-white">TODO</p>
    </Layout>
  );
};

export default Home;
