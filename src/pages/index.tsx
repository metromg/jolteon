import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { api } from "~/utils/api";

type CodeSnippetForm = {
  content: string;
};

const Home: NextPage = () => {
  const [form, setForm] = useState<CodeSnippetForm>({ content: "" });
  const createCodeSnippet = api.codeSnippet.create.useMutation();

  // TODO: Styling, Preview, Layout, Handle Tab in Textarea
  return (
    <>
      <Head>
        <title>Jolteon - Code Sharing made easy</title>
        <meta name="description" content="Share your beautiful code snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-stretch justify-center gap-4 px-4 py-16">
          <h1 className="text-xl text-white">Share your code</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createCodeSnippet.mutate({ ...form });
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
        </div>
      </main>
    </>
  );
};

export default Home;
