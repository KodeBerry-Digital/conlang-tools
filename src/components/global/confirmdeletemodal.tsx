import { Trash2, X } from 'lucide-react'

export default function ConfirmDeleteModal({ showConfirmDeleteModal, setShowConfirmDeleteModal, deleteConlang }: { showConfirmDeleteModal: boolean, setShowConfirmDeleteModal: React.Dispatch<React.SetStateAction<boolean>>, deleteConlang: () => void }) {
  if (!showConfirmDeleteModal) return null

  return (
    <div className='fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50'>
      <div className='bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm transform transition-all'>
        <div className='flex justify-between items-start mb-4'>
          <h3 className='text-xl font-bold text-red-600'>Confirm Deletion</h3>
          <button onClick={() => setShowConfirmDeleteModal(false)} className='text-gray-400 hover:text-gray-600'>
            <X className='w-5 h-5' />
          </button>
        </div>

        <p className='text-gray-700 mb-6'>
          Are you sure you want to permanently delete this conlang? This action cannot be undone.
        </p>

        <div className='flex gap-4'>
          <button onClick={deleteConlang} className='flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold'>
            <Trash2 className='w-4 h-4 inline mr-1' />
            Yes, Delete
          </button>
          <button onClick={() => setShowConfirmDeleteModal(false)} className='flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}
