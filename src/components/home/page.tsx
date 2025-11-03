import { Conlang, User } from '#/types'
import { BookOpen, Globe, Plus, Trash2, Lock, Unlock } from 'lucide-react'

interface thing { // line 15 would be long asl if i didnt do this lmao
  resetConlangForm: () => void,
  setView: React.Dispatch<React.SetStateAction<string>>,
  user: User,
  myConlangs: Conlang[],
  setSelectedConlang: React.Dispatch<React.SetStateAction<Conlang | null>>,
  editConlang: (arg0: Conlang) => void,
  startDeleteConlang: (arg0: number) => void,
  publicConlangs: Conlang[]
}

export default function HomePage({ resetConlangForm, setView, user, myConlangs, setSelectedConlang, editConlang, startDeleteConlang, publicConlangs }: thing) {
  function handleCreateClick() {
    resetConlangForm()
    setView('create')
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-inner p-3 text-center text-sm text-gray-600">
        <span className="font-semibold text-indigo-700">Your User ID:</span> {user.id}
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">My Conlangs</h2>
          <button onClick={handleCreateClick} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Create New
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {myConlangs.map(conlang => (
            <div key={conlang.id} className="bg-linear-to-br from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-indigo-900">{conlang.name}</h3>
                {conlang.isPublic ? <Unlock className="w-5 h-5 text-green-600" /> : <Lock className="w-5 h-5 text-gray-400" />}
              </div>

              <p className="text-sm text-gray-700 mb-2">{conlang.description}</p>
              <p className="text-xs text-gray-500 mb-4">{conlang.dictionary?.length || 0} words • {conlang.isCompound ? 'Compound' : 'Direct'}</p>

              <div className="flex gap-2">
                <button onClick={() => { setSelectedConlang(conlang); setView('dictionary') }} className="flex-1 px-3 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition">View</button>
                <button onClick={() => editConlang(conlang)} className="flex-1 px-3 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition">Edit</button>
                <button onClick={() => startDeleteConlang(conlang.id)} className="px-3 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          ))}

          {myConlangs.length == 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No conlangs yet. Create your first one!</p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Public Conlangs</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {publicConlangs.map(conlang => (
            <div key={conlang.id} className="bg-linear-to-br from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-2">{conlang.name}</h3>
              <p className="text-sm text-gray-700 mb-2">{conlang.description}</p>
              <p className="text-xs text-gray-500 mb-4">
                By {conlang.user.displayName || conlang.user.email} • {conlang.dictionary?.length || 0} words • {conlang.isCompound ? 'Compound' : 'Direct'}
              </p>
              <button onClick={() => { setSelectedConlang(conlang); setView('dictionary') }} className="w-full px-3 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition">
                View Dictionary
              </button>
            </div>
          ))}

          {publicConlangs.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              <Globe className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>No public conlangs available yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
