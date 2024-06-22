'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import closeSvg from 'public/icons/close.svg'

type LeftDrawerProps = {
  open?: boolean
  onClose?: () => void
  routes?: { path: string; label: string; icon?: string }[]
}

export const LeftDrawer: React.FC<LeftDrawerProps> = ({ open = true, onClose, routes }) => {
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
      <div className='relative z-50 h-screen max-w-sm p-4 bg-green-50 '>
        <div className='bg-primary -mx-4 -mt-4 flex items-center justify-between px-4 py-2 text-neutral-200'>
          <h3>
            hotline: <span className='text-base text-white'>0985.136.914</span>
          </h3>
          <button onClick={onClose}>
            <Image src={closeSvg} alt='close' width={16} height={16} />
          </button>
        </div>
        <ul>
          {routes?.map((route, index) => (
            <li className='my-3' key={index}>
              <Link href={route.path} className='text-lg font-semibold text-neutral-900 hover:text-primary uppercase'>
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='fixed inset-0' onClick={onClose} />
    </aside>
  )
}
