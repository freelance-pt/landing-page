'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import CloseSvg from 'public/icons/close.svg'

type LeftDrawerProps = {
  open?: boolean
  onClose?: () => void
  routes?: { path: string; label: string; icon?: string }[]
}

export const LeftDrawer: React.FC<LeftDrawerProps> = ({ open, onClose, routes }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!open) return null

  return (
    <aside
      aria-modal='true'
      role='dialog'
      className={`fixed inset-0 z-50 overflow-hidden transition-transform transform duration-700 ${
        open ? 'translate-x-0' : '-translate-x-full'
      }`}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className='relative z-50 h-screen max-w-sm p-4 bg-green-50 flex flex-col justify-between'>
        <div>
          <div className='bg-primary -mx-4 -mt-4 flex items-center justify-between px-4 py-2 text-neutral-200'>
            <div />
            <button className='flex items-center justify-center' onClick={onClose}>
              <CloseSvg className='h-5 w-5' />
            </button>
          </div>
          <ul>
            {routes?.map((route, index) => (
              <li className='my-3' key={index}>
                <Link
                  href={route.path}
                  className='font-semibold text-neutral-900 hover:text-primary uppercase'
                  onClick={() => onClose?.()}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='bg-primary -mx-4 -mb-4 p-4 text-white'>
          <div>
            <p className='uppercase font-semibold text-lg w-full text-center pt-4'>Hỗ trợ</p>
            <p className='text-center pt-2'>Hotline: 0985.136.914</p>
          </div>
          <div className='flex flex-col gap-4 py-6'>
            <p className='text-center'>
              Nhận thông tin mới nhất, sản phẩm mới, chương trình khuyến mãi từ TràSâmDứa.com
            </p>
            <form className='flex'>
              <input
                type='email'
                placeholder='Nhập email của bạn...'
                className='flex-grow p-2 bg-neutral-100 text-neutral-700 focus:outline-none'
              />
              <button
                type='submit'
                className='bg-neutral-500 text-white px-4 py-2 hover:bg-neutral-600 transition-colors'
              >
                Đăng ký
              </button>
            </form>
          </div>
          <hr className='mt-4' />
          <p className='pt-4 text-center'>trasamdua.com</p>
        </div>
      </div>
      <div className='fixed inset-0' onClick={onClose} />
    </aside>
  )
}
