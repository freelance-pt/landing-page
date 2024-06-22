import Image from 'next/image'
import Link from 'next/link'
import sp1 from 'public/sp1.jpeg'
import sp2 from 'public/sp2.png'
import { formatPrice } from '@/lib/utils'
import { QuantityButton, Button } from '../ui'

type ProductCardProps = {
  data?: any
  onClick?: () => void
}

export const ProductCard = ({ data, onClick }: ProductCardProps) => {
  return (
    <div className='w-full h-full px-2 mb-6 group cursor-pointer'>
      <div className='p-2 w-full max-w-sm bg-white border border-gray-200 rounded-lg group-hover:shadow-xl'>
        <div className='w-full h-full overflow-hidden'>
          <Image
            className='transition-transform duration-300 ease-in-out grouphover:scale-110 origin-center'
            src={sp1}
            alt='product image'
          />
        </div>
        <div className='py-3 px-0 lg:px-3'>
          <h5 className='text-sm lg:text-base font-normal lg:font-medium text-neutral-900 group-hover:text-primary mb-2 uppercase'>
            TRÀ HƯƠNG LÀI NGỌC QUANG
          </h5>
          <div className='mb-2'>
            <span className='text-base lg:text-lg font-medium lg:font-bold text-primary'>{formatPrice(40000)}</span>
            <span className='text-sm font-light text-neutral-800 ml-2 line-through'>{`(${formatPrice(50000)})`}</span>
          </div>
          <div className='flex items-center justify-between'>
            <QuantityButton />
            <Button>Mua ngay</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
