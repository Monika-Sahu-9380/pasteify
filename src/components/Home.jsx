import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId"); // "pasteId" is the key
  const allPastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    if (title === "" || value === "") {
      toast.error("Title and content cannot be empty.", { icon: "❌" });
      return;
    }

    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36), // Base 36 uses digits 0–9 and letters a–z
      createdAt: new Date().toISOString(),
    };

    // if pasteId is present, update the paste; else, add to pastes
    pasteId ? dispatch(updateToPastes(paste)) : dispatch(addToPastes(paste));

    // clean the UI after updation or creation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-1 mt-6">
        {pasteId ? "Edit Paste" : "Create New Paste"}
      </h2>
      <p className="text-gray-500">
        {pasteId
          ? "Update your existing paste below."
          : "Quickly save and share your text snippets."}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <input
          className="flex-1 border border-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none p-3 rounded-md shadow-sm"
          type="text"
          placeholder="Enter title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="px-5 py-3 rounded-md bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          onClick={createPaste}
        >
          {pasteId ? "Update My Paste" : "Add to My Pastes"}
        </button>
      </div>

      <div>
        <textarea
          id="paste-content"
          className="w-full resize-none border border-gray-500 focus:ring-2 focus:ring-blue-300 focus:outline-none p-3 rounded-lg shadow-sm"
          value={value}
          placeholder="Enter content here..."
          rows={15}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Home;
