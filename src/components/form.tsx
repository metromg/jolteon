import Spinner from "./common/spinner";
import { type Theme } from "../types/theme";
import SelectList from "./common/list-box";
import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";

export type CodeSnippetFormData = {
  content: string;
  theme: Theme;
  language: string;
};

const themes: Theme[] = [
  "a11yDark",
  "darcula",
  "duotoneDark",
  "duotoneForest",
  "duotoneLight",
  "duotoneSea",
  "synthwave84",
];

const languages: string[] = ReactSyntaxHighlighter.supportedLanguages;

const Form: React.FC<{
  data: CodeSnippetFormData;
  onChange: (data: CodeSnippetFormData) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}> = ({ data, onChange, onSubmit, isSubmitting }) => {
  // TODO: Handle Tab in Textarea
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
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
          value={data.content}
          onChange={(e) => onChange({ ...data, content: e.target.value })}
        ></textarea>
      </label>
      <div className="flex flex-col justify-between gap-3 md:flex-row">
        <div className="flex justify-between gap-2 md:justify-start">
          <SelectList
            value={data.theme}
            onChange={(val) => onChange({ ...data, theme: val as Theme })}
            options={themes}
          />
          <SelectList
            value={data.language}
            onChange={(val) => onChange({ ...data, language: val })}
            options={languages}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 rounded-md bg-blue-500 p-2 text-white hover:bg-blue-300 disabled:bg-blue-200 sm:text-sm"
        >
          {isSubmitting && (
            <div className="-mt-0.5 h-4 w-4">
              <Spinner />
            </div>
          )}
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
