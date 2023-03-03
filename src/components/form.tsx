import Spinner from "./common/spinner";

export type CodeSnippetFormData = {
  content: string;
};

const Form: React.FC<{
  data: CodeSnippetFormData;
  onChange: (data: CodeSnippetFormData) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}> = ({ data, onChange, onSubmit, isSubmitting }) => {
  // TODO: Styling, Handle Tab in Textarea, Additional options
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
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex items-center justify-center gap-1 rounded-md bg-white p-4 text-black hover:bg-slate-300 disabled:bg-slate-200"
      >
        {isSubmitting && (
          <div className="h-4 w-4">
            <Spinner />
          </div>
        )}
        Submit
      </button>
    </form>
  );
};

export default Form;
