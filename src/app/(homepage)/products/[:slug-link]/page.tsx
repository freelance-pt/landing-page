import Link from 'next/link'
import { Metadata } from 'next'
import { formatPrice, formatPriceToPercent } from '@/lib/utils'
import { QuantityButton } from '@/components/ui'
import { ProductGallery } from '../components/product-gallery'
import { ProductTabs } from '../components/product-tabs'

export const metadata: Metadata = {
  title: 'Trà sâm dứa - Ngọc Quang gói 350G [ Free ship nội thành Hà Nội ]',
  description: 'Trà sâm dứa - Ngọc Quang - Miễn phí giao hàng trong nội thành Hà Nội với đơn hàng từ 10 gói trở lên.',
}

const ProductDetails = () => {
  return (
    <div className='max-w-screen-xl px-2 py-6 lg:px-0 mx-auto'>
      <div className='lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16'>
        <ProductGallery />

        <div className='lg:col-span-2 lg:row-span-2 lg:row-end-2'>
          <h1 className='sm: text-2xl font-bold text-gray-900 sm:text-3xl'>Trà sâm dứa Ngọc Quang</h1>
          <div className='mt-4'>
            <span className='text-sm lg:text-base text-neutral-900'>Danh mục:</span>
            <Link href={'/'} className='text-base  text-green-600 ml-2 italic hover:underline'>
              Trà sâm dứa Ngọc Quang
            </Link>
            <p className='text-green-600 mt-4'>
              <span className='text-neutral-900'>Thành phần:</span> Trà búp xanh, Trà Tiên, Lá Dứa, Sói, Lài, Ngâu,
              Hương thảo mộc tự nhiên
            </p>
            <p className='text-green-600 mt-4'>
              <span className='text-neutral-900'>Khối lượng:</span> 350g
            </p>
          </div>
          <div className='mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0'>
            <div className='flex items-end'>
              <div className='mb-2'>
                <span className='text-xl lg:text-3xl font-medium lg:font-bold text-primary'>{formatPrice(40000)}</span>
                <span className='text-sm font-light text-neutral-800 ml-2 line-through'>{`(${formatPrice(
                  50000
                )})`}</span>
              </div>
            </div>
            <div>
              <span className='text-sm lg:text-base text-neutral-900'>Tiết kiệm:</span>
              <span className='text-base lg:text-lg font-medium lg:font-bold text-red-600 ml-2'>
                {`${formatPrice(10000)} (${formatPriceToPercent(50000, 40000)})`}
              </span>
            </div>
          </div>
          <div className='mt-10'>
            <div className='flex items-center gap-6'>
              <span className='text-sm lg:text-base text-neutral-900'>Số lượng:</span>
              <QuantityButton />
            </div>
            <div className='flex mt-6 gap-4'>
              <button className='px-4 py-2 rounded bg-white border border-primary uppercase text-primary font-semibold block hover:bg-green-50 transition duration-200 ease-in'>
                Thêm vào giỏ hàng
              </button>
              <Link href='/cart'>
                <button className='px-4 py-2 rounded bg-primary uppercase text-white font-semibold block hover:bg-green-800 transition duration-200 ease-in'>
                  Mua ngay
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <ProductTabs />
    </div>
  )
}

export default ProductDetails
