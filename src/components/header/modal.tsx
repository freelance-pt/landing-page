import { useEffect } from 'react'
import CloseSvg from 'public/icons/close.svg'
import { BoxShoppingCart } from '../boxes-shopping-cart'

type ModalProps = {
  open?: boolean
  onClose?: () => void
}

export const Modal = ({ open, onClose }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 justify-center items-center w-full ${
        open ? 'flex' : 'hidden'
      }`}
      onClick={onClose}
    >
      <div
        className='bg-white w-[640px] p-4 rounded max-h-[80%] overflow-y-auto max-w-[90%] md:max-w-[70%] lg:max-w-[60%]'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex items-center justify-between rounded-t pb-4 border-b'>
          <h3 className='text-xl font-semibold text-neutral-900'>Giỏ hàng của bạn</h3>
          <button className='p-2 text-neutral-900' onClick={onClose}>
            <CloseSvg className='h-4 w-4' />
          </button>
        </div>
        <div className='mt-6'>
          <BoxShoppingCart />
        </div>
      </div>
    </div>
  )
}
