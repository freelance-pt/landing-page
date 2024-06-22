'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import logo from 'public/logo-green.png'
import { LeftDrawer } from '../left-drawer'
import { BottomDrawer } from '../bottom-drawer'

const routes: { path: string; label: string; icon?: string }[] = [
  {
    path: '/',
    label: 'Trang chủ',
  },
  {
    path: '/products',
    label: 'Sản phẩm',
  },
  {
    path: '/blog',
    label: 'Blog & Tin tức',
  },
]

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [bottomDrawer, setBottomDrawer] = useState<{ open: boolean; type: 'cart' | 'love' }>()
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen || (bottomDrawer?.open && !!bottomDrawer?.type)) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, bottomDrawer])

  return (
    <>
      <LeftDrawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)} routes={routes} />
      <BottomDrawer
        open={bottomDrawer?.open && !!bottomDrawer?.type}
        type={bottomDrawer?.type}
        onClose={() => setBottomDrawer(undefined)}
      />
      <nav className='antialiased bg-green-50'>
        <div className='max-w-screen-xl flex items-center justify-between px-4 mx-auto 2xl:px-0 py-4'>
          <div className='flex items-center w-[35%]'>
            <button
              type='button'
              data-collapse-toggle='ecommerce-navbar-menu-1'
              aria-controls='ecommerce-navbar-menu-1'
              aria-expanded='false'
              className='inline-flex lg:hidden  hover:bg-gray-100 rounded-md p-2 text-gray-900'
              onClick={() => {
                if (bottomDrawer?.open) {
                  setBottomDrawer(undefined)
                }
                setIsMenuOpen(true)
              }}
            >
              <span className='sr-only'>Open Menu</span>
              <svg
                className='w-6 h-6'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                fill='none'
                viewBox='0 0 24 24'
              >
                <path stroke='currentColor' strokeLinecap='round' strokeWidth={2} d='M5 7h14M5 12h14M5 17h14' />
              </svg>
            </button>
            <ul className='hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center'>
              {routes.map((route) => (
                <li key={route.path}>
                  <Link
                    href={route.path}
                    className={`flex text-base uppercase font-semibold ${
                      route.path === pathname ? 'text-primary' : 'text-gray-900'
                    } hover:text-primary`}
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-[30%] flex justify-center'>
            <Link href='/'>
              <Image className='block w-auto h-12 lg:h-14' src={logo} alt='logo' width={48} height={48} />
            </Link>
          </div>
          <div className='flex items-start justify-end lg:space-x-2 w-[35%]'>
            <div
              className='flex cursor-pointer items-center rounded-md py-2 px-4 text-gray-500 hover:text-primary'
              onClick={() => setBottomDrawer({ open: true, type: 'love' })}
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                  clipRule='evenodd'
                />
              </svg>
              <span className='text-base font-medium ml-2 hidden lg:inline-block'>Yêu thích</span>
            </div>
            <div className='flex cursor-pointer items-center rounded-md py-2 px-4 text-gray-500 hover:text-primary'>
              <button
                className='relative'
                onClick={() =>
                  setBottomDrawer({
                    open: true,
                    type: 'cart',
                  })
                }
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                </svg>
                <span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary p-2 text-xs text-white'>
                  3
                </span>
              </button>
              <span className='ml-2 text-base font-medium hidden lg:inline-block'>Giỏ hàng</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
