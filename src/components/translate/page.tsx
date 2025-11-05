'use client'

import { ArrowLeftRight } from 'lucide-react'
import { useState } from 'react'

import { Conlang } from '#/types'

interface meow {
  myConlangs: Conlang[],
  publicConlangs: Conlang[],
  isTranslating: boolean,
  translateApiCall: (input: string, sourceLang: number, targetLang: number) => Promise<string>
}

export default function TranslatePage({ myConlangs, publicConlangs, isTranslating, translateApiCall }: meow) {
  const [ selectedSourceLang, setSelectedSourceLang ] = useState(-1)
  const [ selectedTargetLang, setSelectedTargetLang ] = useState(-1)
  const [ inputText, setInputText ] = useState('')
  const [ translatedText, setTranslatedText ] = useState('')

  async function translateWithGemini() {
    const text = await translateApiCall(inputText, selectedSourceLang, selectedTargetLang)

    setTranslatedText(text)
  }

  return (
    <div className='bg-white rounded-2xl shadow-xl p-8'>
      <h2 className='text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2'>
        <ArrowLeftRight className='w-6 h-6' />
        Universal Translator
      </h2>

      <div className='grid md:grid-cols-2 gap-6 mb-6'>
        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>Source Language</label>

          <select value={selectedSourceLang || ''} onChange={(e) => setSelectedSourceLang(parseInt(e.target.value))} className='w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 focus:outline-none'>
            <option value=''>Select language...</option>

            <optgroup label='My Conlangs'>
              {myConlangs.map(lang => (
                <option key={lang.id} value={lang.id}>{lang.name}</option>
              ))}
            </optgroup>

            <optgroup label='Public Conlangs'>
              {publicConlangs.map(lang => (
                <option key={lang.id} value={lang.id}>{lang.name} (by {lang.user.displayName || lang.user.email})</option>
              ))}
            </optgroup>
          </select>
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>Target Language</label>

          <select value={selectedTargetLang || ''} onChange={(e) => setSelectedTargetLang(parseInt(e.target.value))} className='w-full px-4 py-2 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 focus:outline-none'>
            <option value=''>Select language...</option>

            <optgroup label='My Conlangs'>
              {myConlangs.map(lang => (
                <option key={lang.id} value={lang.id}>{lang.name}</option>
              ))}
            </optgroup>

            <optgroup label='Public Conlangs'>
              {publicConlangs.map(lang => (
                <option key={lang.id} value={lang.id}>{lang.name} (by {lang.user.displayName || lang.user.email})</option>
              ))}
            </optgroup>
          </select>
        </div>
      </div>

      <div className='grid md:grid-cols-2 gap-6 mb-6'>
        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>Input Text</label>

          <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} className='w-full h-40 p-4 border-2 border-indigo-200 rounded-lg focus:border-indigo-500 focus:outline-none resize-none' placeholder='Enter text to translate...' />
        </div>

        <div>
          <label className='block text-sm font-semibold text-gray-700 mb-2'>Translation</label>

          <div className='w-full h-40 p-4 bg-indigo-50 border-2 border-indigo-200 rounded-lg overflow-auto'>
            <p className='text-gray-800 whitespace-pre-wrap'>{translatedText || 'Translation will appear here...'}</p>
          </div>
        </div>
      </div>

      <button onClick={translateWithGemini} disabled={isTranslating} className='w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2'>
        {isTranslating ? <>
          <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
          Translating with AI...
        </> : (
          'Translate with Gemini AI'
        )}
      </button>

      <div className='mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg'>
        <h3 className='font-semibold text-blue-900 mb-2'>💡 Translation Tips</h3>

        <ul className='text-sm text-blue-800 space-y-1 list-disc list-inside'>
          <li>Compound languages combine words to create new meanings</li>
          <li>The AI analyzes both dictionaries to find the best translation</li>
          <li>You can translate between any two languages (yours or public)</li>
          <li>Results may vary based on dictionary completeness</li>
        </ul>
      </div>
    </div>
  )
}