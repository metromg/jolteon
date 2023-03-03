import Layout from "./layout";
import Spinner from "./spinner";

const Loading: React.FC = () => {
  return (
    <Layout>
      <div className="flex w-full items-center justify-center">
        <div className="h-10 w-10 text-white">
          <Spinner />
        </div>
      </div>
    </Layout>
  );
};

export default Loading;
