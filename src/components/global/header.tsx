import { User } from '#/types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faLanguage, faBook, faGear} from '@fortawesome/free-solid-svg-icons'

interface mewo {
  user: User,
  authError: string,
  view: string,
  setView: React.Dispatch<React.SetStateAction<string>>,
  handleLogout: (() => void)
}

export default function Header({ user, authError, view, setView, handleLogout }: mewo) {
  return (
    <div className='w-full top-0 z-50 flex justify-center items-center gap-[5px] px-6 py-3'>
      <div className='flex items-center justify-between px-8 py-4 bg-[rgba(20,149,255,0.3)] backdrop-blur-3xl rounded-full w-4/5 shadow-lg border-blue-500 transition-all duration-300'>
        <div className='flex items-left flex-col'>
          <Link className='font-bold text-xl sm:text-2xl text-black dark:text-white hover:scale-105 transition-transform duration-300' href='/'>Untitled App</Link>
          {!user.isAnonymous && !authError && (user.displayName || 'Not signed in')}
          {authError && authError}
        </div>

        <div className='hidden md:flex items-center gap-[5px] text-xl font-bold text-black dark:text-white'>
          <button onClick={() => { setView('home') }} className={'transition-colors duration-300 hover:bg-blue-400 px-3 py-2 rounded-full' + (view == 'home' ? ' bg-blue-300' : '')}>Home <FontAwesomeIcon icon={faHouse} /></button>
          <button onClick={() => { setView('translate') }} className={'transition-colors duration-300 hover:bg-blue-400 py-2 px-3 rounded-full' + (view == 'translate' ? ' bg-blue-300' : '')}>Translate <FontAwesomeIcon icon={faLanguage} /></button>
          <button onClick={() => { setView('dictionary') }} className={'transition-colors duration-300 hover:bg-blue-400 py-2 px-3 rounded-full' + (view == 'dictionary' ? ' bg-blue-300' : '')}>Dictionary <FontAwesomeIcon icon={faBook} /></button>
          <button onClick={() => { setView('create') }} className={'transition-colors duration-300 hover:bg-blue-400 py-2 px-3 rounded-full' + (view == 'create' ? ' bg-blue-300' : '')}>Create <FontAwesomeIcon icon={faBook} /></button>
          <button onClick={() => { handleLogout() }} className={'transition-colors duration-300 hover:bg-blue-400 py-2 px-3 rounded-full'}>Log Out <FontAwesomeIcon icon={faGear} /></button>
        </div>
      </div>
    </div>
  )
}
