import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { duotoneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { duotoneForest } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { duotoneLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { duotoneSea } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { synthwave84 } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { type Theme } from "~/types/theme";

function getStyle(theme: Theme) {
  switch (theme) {
    case "a11yDark":
      return a11yDark;
    case "darcula":
      return darcula;
    case "duotoneDark":
      return duotoneDark;
    case "duotoneForest":
      return duotoneForest;
    case "duotoneLight":
      return duotoneLight;
    case "duotoneSea":
      return duotoneSea;
    case "synthwave84":
      return synthwave84;
    default:
      return a11yDark;
  }
}

const Snippet: React.FC<{
  content: string;
  theme: Theme;
  language: string;
}> = ({ content, theme, language }) => {
  return (
    <div className="flex justify-center">
      <ReactSyntaxHighlighter
        className="rounded-md !p-3"
        style={getStyle(theme)}
        language={language}
        wrapLongLines={true}
      >
        {content}
      </ReactSyntaxHighlighter>
    </div>
  );
};

export default Snippet;
