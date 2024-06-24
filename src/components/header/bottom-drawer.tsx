'use client'

import React, { useEffect, useRef } from 'react'
import CloseSvg from 'public/icons/close.svg'
import { LoveProductCard } from '../love-product-card'

type BottomDrawerProps = {
  open?: boolean
  type?: 'cart' | 'love'
  onClose?: () => void
}

export const BottomDrawer: React.FC<BottomDrawerProps> = ({ open, type, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, onClose])

  return (
    <div
      ref={drawerRef}
      className={`fixed inset-x-0 bottom-0 z-50 overflow-hidden transition-transform transform duration-700 ${
        open ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className='relative z-50 max-h-[60vh] lg:max-h-[50vh] w-full bg-green-50 overflow-auto'>
        <div className='fixed w-full bg-primary '>
          <div className='flex items-center w-full max-w-screen-xl mx-auto justify-between px-2 lg:px-0 py-2 text-white'>
            <h3 className='font-semibold text-lg'>
              {type === 'cart' ? `Giỏ hàng của bạn` : 'Danh sách sản phẩm yêu thích'}
            </h3>
            <button className='-m-2 p-2' onClick={onClose}>
              <CloseSvg className='h-5 w-5' />
            </button>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto py-4 px-2 mt-8 lg:px-0'>
          <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <LoveProductCard />
            <LoveProductCard />
            <LoveProductCard />
          </div>
        </div>
      </div>
      {/* <div className='fixed inset-0' onClick={onClose} /> */}
    </div>
  )
}
