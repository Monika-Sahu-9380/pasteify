const About = () => {
  return (
    <div className="max-w-5xl mx-auto mt-8">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          About <span className="text-blue-600">Pasteify</span> 📝
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A modern, lightweight web app to create, manage, and share text snippets
          without the clutter.
        </p>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        ✨ Key Features ✨
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="p-5 border rounded-xl shadow hover:shadow-lg bg-white transition">
          <h3 className="font-semibold text-lg text-blue-600 mb-2">📌 Quick Save</h3>
          <p className="text-gray-600">
            Create and save text snippets with titles for easy access.
          </p>
        </div>
        <div className="p-5 border rounded-xl shadow hover:shadow-lg bg-white transition">
          <h3 className="font-semibold text-lg text-green-600 mb-2">✏️ Edit Anytime</h3>
          <p className="text-gray-600">
            Update or modify your saved pastes with just a click.
          </p>
        </div>
        <div className="p-5 border rounded-xl shadow hover:shadow-lg bg-white transition">
          <h3 className="font-semibold text-lg text-purple-600 mb-2">📋 Instant Copy</h3>
          <p className="text-gray-600">
            Copy paste content directly to your clipboard instantly.
          </p>
        </div>
        <div className="p-5 border rounded-xl shadow hover:shadow-lg bg-white transition">
          <h3 className="font-semibold text-lg text-pink-600 mb-2">🔗 Share Easily</h3>
          <p className="text-gray-600">
            Share pastes with your friends or colleagues.
          </p>
        </div>
        <div className="p-5 border rounded-xl shadow hover:shadow-lg bg-white transition">
          <h3 className="font-semibold text-lg text-yellow-600 mb-2">🔍 Smart Search</h3>
          <p className="text-gray-600">
            Find any paste instantly with powerful search & filter.
          </p>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          💡 Why Pasteify?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Pasteify focuses on simplicity. Unlike bulky note-taking apps, it gives
          you exactly what you need — a clean, distraction-free space to create,
          edit, and share snippets. Built with <span className="font-semibold">React</span> and{" "}
          <span className="font-semibold">Tailwind CSS</span>, it delivers a fast and
          modern experience you’ll love.
        </p>
      </div>
    </div>
  );
};

export default About;
