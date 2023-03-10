import Head from "next/head";
import { type ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Jolteon - Code Sharing made easy</title>
        <meta name="description" content="Share your beautiful code snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container mx-auto flex min-h-screen px-4 py-16">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
