import { User } from '#/types'
import HeaderButton from '@/global/headerbutton'
import Link from 'next/link'

export default function Header({ user, authError, view, setView, handleLogout }: { user: User, authError: string, view: string, setView: React.Dispatch<React.SetStateAction<string>>, handleLogout: (() => void) }) {
  return (
    <div>
    <header className='bg-white shadow-md'>
      <div className="fixed w-full top-0 z-50 flex justify-center items-center gap-[5px] px-6 py-3">
      <div className="frosted-card flex items-center justify-between px-8 py-4 frosted-glass bg-[rgba(0,0,0,0.1)] backdrop-blur-3xl rounded-full w-4/5 shadow-lg border-gray-500 transition-all duration-300">
        <div className='flex items-center gap-[5px]'>
      <Link className='font-bold tracking-[2px] text-xl sm:text-2xl text-black dark:text-white hover:scale-105 transition-transform duration-300' href="/">
            Untitled App
          </Link>
        </div>
        <div className='hidden md:flex items-center gap-[5px] font-[railway] text-black dark:text-white'>
          <Link href="/" className="hover:text-amber-500 transition-colors duration-300">Home</Link>
          <Link href="/dashboard" className="hover:text-amber-500 transition-colors duration-300">Dashboard</Link>
          <Link href="/media" className="hover:text-amber-500 transition-colors duration-300">Media</Link>
          <Link href="/settings" className="hover:text-amber-500 transition-colors duration-300">Settings</Link>
        </div>
      </div>
      <div className="flex items-center justify-center ml-4">
      </div>

    </div>
    </header>
    </div>
  )
}
