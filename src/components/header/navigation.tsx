'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import logo from 'public/logo-green.png'
import HeartSvg from 'public/icons/heart.svg'
import CartSvg from 'public/icons/cart.svg'
import BurgerMenu from 'public/icons/burger-menu.svg'
import { useWindowSize } from '@/lib/hooks'
import { LeftDrawer } from './left-drawer'
import { BottomDrawer } from './bottom-drawer'
import { Modal } from './modal'

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
    path: '/blogs',
    label: 'Blog & Tin tức',
  },
  {
    path: '/cart',
    label: 'Giỏ hàng',
  },
]

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [bottomDrawer, setBottomDrawer] = useState<{ open: boolean; type: 'cart' | 'love' }>()
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  const pathname = usePathname()
  const { width } = useWindowSize()
  const router = useRouter()

  const isMobile = width && width < 720

  useEffect(() => {
    if (isMenuOpen || (bottomDrawer?.open && !!bottomDrawer?.type)) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, bottomDrawer])

  return (
    <>
      <Modal open={visibleModal} onClose={() => setVisibleModal(false)} />
      <LeftDrawer open={isMenuOpen} onClose={() => setIsMenuOpen(false)} routes={routes} />

      <nav className='antialiased bg-green-50'>
        <div className='max-w-screen-xl flex items-center justify-between px-4 mx-auto 2xl:px-0 py-4'>
          <div className='flex items-center w-[35%]'>
            <button
              type='button'
              data-collapse-toggle='ecommerce-navbar-menu-1'
              aria-controls='ecommerce-navbar-menu-1'
              aria-expanded='false'
              className='inline-flex lg:hidden rounded-md p-2 text-gray-900 hover:text-primary'
              onClick={() => {
                if (bottomDrawer?.open) {
                  setBottomDrawer(undefined)
                }
                setIsMenuOpen(true)
              }}
            >
              <span className='sr-only'>Open Menu</span>
              <BurgerMenu className='w-6 h-6' />
            </button>
            <ul className='hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center'>
              {routes
                .filter((i) => i.path !== '/cart')
                .map((route) => (
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
            <button
              className='flex cursor-pointer items-center rounded-md py-2 px-4 text-gray-500 hover:text-primary'
              onClick={() => {
                setBottomDrawer({
                  open: true,
                  type: 'love',
                })
              }}
            >
              <HeartSvg className='w-5 h-5 fill-none' />
              <span className='text-base font-medium ml-2 hidden lg:inline-block'>Yêu thích</span>
            </button>
            <button
              className='flex cursor-pointer items-center rounded-md py-2 px-4 text-gray-500 hover:text-primary'
              onClick={() => {
                if (isMobile) {
                  router.push('/cart')
                } else {
                  setVisibleModal(true)
                }
              }}
            >
              <div className='relative'>
                <CartSvg className='w-5 h-5 fill-none' />
                <span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary p-2 text-xs text-white'>
                  3
                </span>
              </div>
              <span className='ml-2 text-base font-medium hidden lg:inline-block'>Giỏ hàng</span>
            </button>
          </div>
        </div>
      </nav>
      <BottomDrawer
        open={bottomDrawer?.open && !!bottomDrawer?.type}
        type={bottomDrawer?.type}
        onClose={() => setBottomDrawer(undefined)}
      />
    </>
  )
}
