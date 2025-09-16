import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams(); // Reads ":id" from the URL
  const allPastes = useSelector((state) => state.paste.pastes);
  const pasteToDisplay = allPastes.find((p) => p._id === id);

  const handleCopy = () => {
    navigator.clipboard.writeText(pasteToDisplay.content);
    toast.success("Copied to clipboard!");
  };

  if (!pasteToDisplay) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh] text-center select-none">
        <div className="text-6xl mb-4">🧐</div>
        <h2 className="text-xl font-semibold text-gray-700">Paste not found</h2>
        <p className="text-gray-500 mb-4">
          The paste you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4 bg-white rounded-xl shadow-2xl">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-900 break-words cursor-not-allowed">
          {pasteToDisplay.title}
        </h2>
        <button
          title="Copy content to clipboard"
          className="p-2 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={handleCopy}
        >
          <Copy className="h-6 w-6" />
        </button>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
        <pre className="text-gray-800 font-mono whitespace-pre-wrap break-words text-sm cursor-not-allowed">
          {pasteToDisplay.content}
        </pre>
      </div>
    </div>
  );
};

export default ViewPaste;