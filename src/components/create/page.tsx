export default function CreatePage() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {editingConlang ? 'Edit Conlang' : 'Create New Conlang'}
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Language Name</label>
          <input
            type="text"
            value={conlangName}
            onChange={(e) => setConlangName(e.target.value)}
            className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 focus:outline-none"
            placeholder="e.g., paɤk niɤ"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
          <textarea
            value={conlangDescription}
            onChange={(e) => setConlangDescription(e.target.value)}
            className="w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 focus:outline-none resize-none"
            rows="3"
            placeholder="Describe your language..."
          />
        </div>

        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isCompound}
              onChange={(e) => setIsCompound(e.target.checked)}
              className="w-5 h-5 text-indigo-600 rounded-md"
            />
            <span className="text-sm text-gray-700">
              <strong>Compound Language</strong> - Words combine to create new meanings
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className="w-5 h-5 text-indigo-600 rounded-md"
            />
            <span className="text-sm text-gray-700">
              <strong>Public</strong> - Share with everyone
            </span>
          </label>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Dictionary (CSV)
          </label>
          <div className="border-2 border-dashed border-indigo-300 rounded-lg p-6 text-center">
            <Upload className="w-12 h-12 mx-auto mb-3 text-indigo-400" />
            <input
              type="file"
              accept=".csv"
              onChange={handleCSVUpload}
              className="hidden"
              id="csv-upload"
            />
            <label
              htmlFor="csv-upload"
              className="cursor-pointer text-indigo-600 hover:text-indigo-700 font-semibold"
            >
              Click to upload CSV
            </label>
            <p className="text-sm text-gray-500 mt-2">
              CSV should have headers (e.g., Word, English, POS)
            </p>
            {csvData.length > 0 && (
              <p className="text-sm text-green-600 mt-2 font-semibold">
                ✓ {csvData.length} words loaded
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={saveConlang}
            className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          >
            <Save className="w-5 h-5" />
            Save Conlang
          </button>
          <button
            onClick={() => {
              resetConlangForm();
              setView('home');
            }}
            className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
