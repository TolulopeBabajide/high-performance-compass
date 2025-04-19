export default function Header({ mode, setMode }) {
    return (
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">🌟 High-Performance Compass</h1>
        <div className="flex justify-center">
          <button
            onClick={() => setMode("full")}
            className={`px-5 py-2 mx-2 rounded-full transition-colors ${mode === "full" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            Full Mode
          </button>
          <button
            onClick={() => setMode("lightning")}
            className={`px-5 py-2 mx-2 rounded-full transition-colors ${mode === "lightning" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          >
            Lightning Mode
          </button>
        </div>
      </div>
    );
  }
  