import Link from 'next/link'
import shopeeSvg from 'public/icons/shopee.svg'
import { Navigation } from './navigation'

export const Header = () => {
  return (
    <header className='bg-primary'>
      <div className=' text-gray-300 hidden text-sm lg:flex items-center justify-between max-w-screen-xl w-full mx-auto py-2 px-4 2xl:px-0'>
        <h3>
          hotline: <span className='text-base text-white'>0985.136.914</span>
        </h3>
        <div className='flex items-center justify-end gap-4'>
          {/* <Link href={'/'}>
            <Image src={shopeeSvg} alt='shopee' width={24} height={24} />
          </Link>
          <Link href={'/'}>
            <Image src={shopeeSvg} alt='shopee' width={24} height={24} />
          </Link>
          <Link href={'/'}>
            <Image src={shopeeSvg} alt='shopee' width={24} height={24} />
          </Link> */}
        </div>
      </div>
      <Navigation />
    </header>
  )
}
