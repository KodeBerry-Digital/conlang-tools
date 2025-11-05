import { Conlang, Word } from '#/types'

import { Search } from 'lucide-react'

interface thing {
  resetConlangForm: () => void,
  setView: React.Dispatch<React.SetStateAction<string>>,
  setSelectedConlang: React.Dispatch<React.SetStateAction<Conlang | null>>,
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>,
  selectedConlang: Conlang,
  searchTerm: string,
  filteredDictionary: Word[]
}

export default function DictionaryPage({ setSelectedConlang, setSearchTerm, setView, selectedConlang, searchTerm, filteredDictionary }: thing) {
  function handleBackClick() {
    setSelectedConlang(null)
    setSearchTerm('')
    setView('home')
  }

  return (
    <div className='bg-white rounded-2xl shadow-xl p-8'>
      <div className='flex items-center justify-between mb-6'>
        <div>
          <h2 className='text-2xl font-bold text-gray-800'>{selectedConlang.name}</h2>
          <p className='text-gray-600'>{selectedConlang.description}</p>

          <p className='text-sm text-gray-500 mt-1'>
            {selectedConlang.isCompound ? '🔗 Compound Language' : '📖 Direct Translation'} • 
            {selectedConlang.dictionary?.length || 0} words • 
            Created by {selectedConlang.user.displayName || selectedConlang.user.email}
          </p>
        </div>

        <button onClick={handleBackClick} className='px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition'>Back</button>
      </div>

      <div className='mb-6'>
        <div className='relative'>
          <Search className='absolute left-3 top-3 w-5 h-5 text-gray-400' />

          <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search dictionary...' className='w-full pl-10 pr-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 focus:outline-none'  />
        </div>
      </div>

      <div className='overflow-x-auto max-h-96 overflow-y-auto border border-gray-200 rounded-lg'>
        <table className='w-full'>
          <thead className='bg-indigo-100 sticky top-0'>
            <tr>
              {selectedConlang.dictionary.length > 0 && Object.keys(selectedConlang.dictionary[0] || {}).map(header => (
                <th key={header} className='px-4 py-3 text-left text-sm font-semibold text-indigo-900'>
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredDictionary.map((entry, idx) => (
              <tr key={idx} className='border-b border-gray-200 hover:bg-indigo-50 transition'>
                {selectedConlang.dictionary.length > 0 && Object.keys(selectedConlang.dictionary[idx]).map((header, vidx) => (
                  <td key={vidx} className='px-4 py-3 text-sm text-gray-700'>
                    {header == 'word' ? entry.word : ''}
                    {/* wth happened here */}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        {filteredDictionary.length == 0 && (
          <div className='text-center py-12 text-gray-500'>
            {searchTerm ? 'No matching entries found' : 'Dictionary is currently empty.'}
          </div>
        )}
      </div>
    </div>
  )
}
