import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '@/components'
import logo from 'public/logo.png'

const CartLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <header className='fixed w-full top-0 z-50'>
        <div className='bg-primary'>
          <div className='max-w-screen-xl mx-auto py-4 lg:py-6 font-sans text-white px-2 lg:px-0 flex items-center justify-between'>
            <Link href={'/'} className='flex items-center justify-start gap-4 lg:gap-8'>
              <Image src={logo} alt='logo' className='w-24 lg:w-36 h-auto' />
              <h1 className='text-lg lg:text-2xl capitalize border-l border-white px-6'>Giỏ hàng</h1>
            </Link>
            <div>
              <p className='text-white text-lg'>
                <span className='text-neutral-200 text-base'>hotline: </span>0985.136.914
              </p>
            </div>
          </div>
        </div>
      </header>
      <main className='font-sans mt-[80px] lg:mt-[128px]'>{children}</main>
      <Footer isCartLayout />
    </>
  )
}

export default CartLayout
