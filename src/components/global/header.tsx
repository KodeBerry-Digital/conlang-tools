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
        <div className='flex items-center gap-[5px]'>
          <Link className='font-bold tracking-[2px] text-xl sm:text-2xl text-black dark:text-white hover:scale-105 transition-transform duration-300' href='/'>Untitled App</Link>
        </div>

        <div className='hidden md:flex items-center gap-[5px] text-xl font-bold text-black dark:text-white'>
          <Link href='/home' className='transition-colors duration-300 hover:bg-blue-400 px-3 py-2  rounded-full'>Home <FontAwesomeIcon icon={faHouse} /></Link>
          <Link href='/dashboard' className='transition-colors duration-300 hover:bg-blue-400 py-2 px-3 rounded-full'>Translate <FontAwesomeIcon icon={faLanguage} /></Link>
          <Link href='/media' className='transition-colors duration-300 hover:bg-blue-400 py-2 px-3 rounded-full'>Dictionary <FontAwesomeIcon icon={faBook} /></Link>
          <Link href='/settings' className='transition-colors duration-300 hover:bg-blue-400 py-2 px-3 rounded-full'><FontAwesomeIcon icon={faGear} /></Link>
        </div>
      </div>
    </div>
  )
}
