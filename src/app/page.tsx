'use client'

import { useState } from 'react'

import { Conlang, User, Word } from '#/types'
import Header from '@/global/header'
import ConfirmDeleteModal from '@/global/confirmdeletemodal'
import HomePage from '@/home/page'
import CreatePage from '@/create/page'
import TranslatePage from '@/translate/page'
import DictionaryPage from '@/dictionary/page'

export default function Home() {
  const [ authError, setAuthError ] = useState('')
  const [ view, setView ] = useState('')
  const [ showConfirmDeleteModal, setShowConfirmDeleteModal ] = useState(false)
  const [ searchTerm, setSearchTerm ] = useState('')
  const [ editingConlang, setEditingConlang ] = useState(false)
  const [ csvData, setCsvData ] = useState('')
  const [ isTranslating, setIsTranslating ] = useState(false)
  const [ user, setUser ] = useState<User>({
    id: 36547,
    email: 'real@test.mail',
    displayName: 'real',
    isAnonymous: false
  })
  const [ myConlangs, setMyConlangs ] = useState<Conlang[]>([
    {
      id: 1,
      name: 'test',
      description: 'description',
      dictionary: [
        { word: 'word1' },
        { word: 'word2' }
      ],
      user: user,
      isCompound: false,
      isPublic: false
    }
  ])
  const [ selectedConlang, setSelectedConlang ] = useState<Conlang | null>(myConlangs[0]) // temp but whatever
  const [ publicConlangs, setPublicConlangs ] = useState<Conlang[]>([
    {
      id: 1,
      name: 'test',
      description: 'description',
      dictionary: [
        { word: 'word1' },
        { word: 'word2' }
      ],
      isCompound: false,
      user: user, // temp but ok,
      isPublic: true
    }
  ])
  const [ filteredDictionary, setFilteredDictionary ] = useState<Word[]>([
    { word: 'word2' },
    { word: 'word2' }
  ])

  function handleLogout() {
    // top 5 code moments of all time i think
  }

  function deleteConlang() {
    // mt function RA
  }

  function resetConlangForm() {
    // the best function that does so many things
  }

  function editConlang(conlang: Conlang) {
    // ok
    if (!conlang.id) return // had to make warning have the quiet
  }

  function startDeleteConlang(conlangId: number) {
    if (!conlangId) return // ok then si
  }

  function handleCSVUpload(e: React.ChangeEvent) {
    if (!e) return
  }

  function saveConlang(conlang: Conlang) { // also uploads it
    if (!conlang) return
  }

  async function handleTranslate(input: string, sourceLang: number, targetLang: number) {
    if (!input || !sourceLang || !targetLang) return ''
    return '' // lmao
  }

  return (
    <div className='min-h-screen bg-linear-to-br from-indigo-50 via-purple-50 to-pink-50'>
      <ConfirmDeleteModal showConfirmDeleteModal={showConfirmDeleteModal} setShowConfirmDeleteModal={setShowConfirmDeleteModal} deleteConlang={deleteConlang} />
      <Header user={user} authError={authError} view={view} setView={setView} handleLogout={handleLogout} />

      <div className='max-w-7xl mx-auto p-6'>
        <div className='p-4 mb-4 bg-red-100 text-red-700 rounded-xl font-semibold border-l-4 border-red-500'>
          ⚠️ **Configuration Warning:** The application is using a placeholder configuration. Data persistence may not work correctly. ok
        </div>

        {view == 'home' && <HomePage resetConlangForm={resetConlangForm} setView={setView} user={user} myConlangs={myConlangs} setSelectedConlang={setSelectedConlang} editConlang={editConlang} startDeleteConlang={startDeleteConlang} publicConlangs={publicConlangs} />}
        {view == 'create' && <CreatePage setView={setView} user={user} editingConlang={editingConlang} handleCSVUpload={handleCSVUpload} csvData={csvData} saveConlang={saveConlang} />}
        {view == 'translate' && <TranslatePage myConlangs={myConlangs} publicConlangs={publicConlangs} isTranslating={isTranslating} translateApiCall={handleTranslate} />}
        {view == 'dictionary' && selectedConlang && <DictionaryPage resetConlangForm={resetConlangForm} setView={setView} setSelectedConlang={setSelectedConlang} setSearchTerm={setSearchTerm} selectedConlang={selectedConlang} searchTerm={searchTerm} filteredDictionary={filteredDictionary}/>}
      </div>
    </div>
  )
}
