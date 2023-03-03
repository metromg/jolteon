import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Layout from "./layout";

const Error: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center gap-3">
        <FaceFrownIcon className="h-10 w-10 text-white" />
        <p className="text-xl text-white">Something went wrong...</p>
      </div>
    </Layout>
  );
};

export default Error;
