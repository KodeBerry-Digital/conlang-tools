export default function HeaderButton({ text, view, curview, setView }: { text: string, view: string, curview: string, setView: React.Dispatch<React.SetStateAction<string>> }) {
  return (
    <button onClick={() => setView(view)} className={`px-4 py-2 rounded-lg transition ${curview == view ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
      {text}
    </button>
  )
}
