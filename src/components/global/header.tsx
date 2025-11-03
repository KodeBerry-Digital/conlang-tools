import { User } from '#/types'
import HeaderButton from '@/global/headerbutton'

export default function Header({ user, authError, view, setView, handleLogout }: { user: User, authError: string, view: string, setView: React.Dispatch<React.SetStateAction<string>>, handleLogout: (() => void) }) {
  return (
    <header className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold'>
            {user.displayName?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase() || 'G'}
          </div>
          <div>
            <h1 className='text-2xl font-bold text-gray-800'>Conlang Platform</h1>
            <p className='text-sm text-gray-600 truncate max-w-xs'>
              {user.displayName || user.email || `User ID: ${user.id}`}
            </p>
          </div>
        </div>
        
        <nav className='flex items-center gap-4'>
          {authError && (
            <span className='p-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm font-medium'>
              {authError}
            </span>
          )}

          <HeaderButton text='Home' view='home' curview={view} setView={setView} />
          <HeaderButton text='Translate' view='translate' curview={view} setView={setView} />
          <HeaderButton text='Create' view='create' curview={view} setView={setView} />
          <HeaderButton text='Dictionary' view='dictionary' curview={view} setView={setView} />

          <button onClick={handleLogout} className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition flex items-center gap-2'>
            {/* <LogOut className='w-4 h-4' /> ??????????????? */}
            Logout
          </button>
        </nav>
      </div>
    </header>
  )
}
