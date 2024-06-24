import Image from 'next/image'
import { formatPrice } from '@/lib/utils'
import sp1 from 'public/sp1.jpeg'
import { Button } from '../ui'

export const LoveProductCard = () => {
  return (
    <div className='flex h-36 lg:h-48 items-center group bg-white border border-gray-200 rounded-lg shadow'>
      <div className='h-full aspect-square'>
        <Image className='h-full rounded-l-lg' src={sp1} objectFit='cover' alt='product image' />
      </div>
      <div className='flex flex-col justify-between p-4 leading-normal'>
        <h5 className='text-sm lg:text-base font-normal lg:font-medium text-neutral-900 group-hover:text-primary mb-2 uppercase'>
          TRÀ HƯƠNG LÀI NGỌC QUANG
        </h5>
        <div className='mb-2'>
          <span className='text-base lg:text-lg font-medium lg:font-bold text-primary'>{formatPrice(40000)}</span>
          <span className='text-sm font-light text-neutral-800 ml-2 line-through'>{`(${formatPrice(50000)})`}</span>
        </div>
        <div className='flex items-center justify-start gap-4'>
          <Button>Bỏ thích</Button>
          <Button>Mua ngay</Button>
        </div>
      </div>
    </div>
  )
}
