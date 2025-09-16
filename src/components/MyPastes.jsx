import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Trash2, Copy, Eye, Share, Pencil } from "lucide-react";
import { removeFromPastes } from "../redux/pasteSlice";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const MyPastes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const allPastes = useSelector((state) => state.paste.pastes);
  // console.log(allPastes);

  const filteredData = allPastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  // console.log(filteredData);

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  function handleCopy(pasteContent) {
    navigator.clipboard.writeText(pasteContent);
    toast.success("Copied to clipboard");
  }

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-gray-900 mb-1 mt-6">All Pastes</h2>
      <p className="text-gray-500">
        Browse, search, and manage your saved pastes.
      </p>
      {/* Search Bar */}
      <div className="search mt-7">
        <div className="flex items-center border rounded-md overflow-hidden shadow-sm bg-white min-w-[600px]">
          <div className="flex items-center pl-3 pr-2 text-gray-400 border-r">
            <Search className="h-5 w-5" />
          </div>
          <input
            aria-label="Search"
            className="flex-1 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none"
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search Paste"
          />
          <button
            type="button"
            className="ml-auto px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
            aria-label="Search button"
          >
            Search
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              key={paste?._id}
              className="border rounded-lg shadow-sm p-4 flex flex-col sm:flex-row sm:justify-between gap-8 bg-white hover:shadow-md transition"
            >
              <div className="flex flex-col text-left flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {paste.title}
                </h3>
                <p className="text-gray-600 mt-1 break-words line-clamp-3">
                  {paste.content}
                </p>
              </div>

              <div className="flex flex-col items-end gap-4">
                <div className="flex flex-wrap gap-4">
                  <button title="Edit">
                    <Link to={`/?pasteId=${paste?._id}`}>
                      <Pencil className="h-5 w-5 text-gray-600 hover:text-black transition" />
                    </Link>
                  </button>
                  <button
                    title="Share"
                    onClick={() =>
                      navigator.share({
                        title: "Check out this paste!",
                        text: "Here’s something I want to share with you.",
                        url: `${window.location.origin}/pastes/${paste?._id}`,
                      })
                    }
                  >
                    <Share className="h-5 w-5 text-gray-600 hover:text-green-600 transition" />
                  </button>
                  <button title="View">
                    <Link to={`/pastes/${paste?._id}`}>
                      <Eye className="h-5 w-5 text-gray-600 hover:text-blue-600 transition" />
                    </Link>
                  </button>
                  <button
                    title="Copy to Clipboard"
                    onClick={() => handleCopy(paste?.content)}
                  >
                    <Copy className="h-5 w-5 text-gray-600 hover:text-blue-600 transition" />
                  </button>
                  <button
                    title="Delete"
                    onClick={() => handleDelete(paste?._id)}
                  >
                    <Trash2 className="h-5 w-5 text-gray-600 hover:text-red-600 transition" />
                  </button>
                </div>
                <span className="text-sm text-gray-900">
                  {/* {new Date(paste.createdAt).toLocaleString()} */}
                  {new Date(paste.createdAt).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-[50vh] text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-gray-700">
              No pastes yet
            </h2>
            <p className="text-gray-500 mb-4">
              Start by creating your very first paste!
            </p>

            <button
              className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-md transition"
            >
              <Link to={`/`}>✙ Create Paste</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPastes;
