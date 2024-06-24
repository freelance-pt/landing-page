import Image from 'next/image'
import sp1 from 'public/sp1.jpeg'
import { formatPrice } from '@/lib/utils'
import { Button, QuantityButton } from '../ui'

export const BoxShoppingCart = () => {
  return (
    <div className='mx-auto'>
      <div className='bg-white'>
        <div className='flow-root'>
          <ul>
            <li className='flex flex-col space-y-3 py-4 lg:py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0'>
              <div className='shrink-0'>
                <Image className='h-24 w-24 max-w-full rounded-lg object-cover' alt='product' src={sp1} />
              </div>
              <div className='relative flex flex-1 flex-col justify-between'>
                <div className='sm:col-gap-5 sm:grid sm:grid-cols-2'>
                  <div className='pr-8 sm:pr-5'>
                    <p className='text-base font-semibold text-neutral-900 uppercase'>Trà sâm dứa Ngọc Quang</p>
                    <p className='mx-0 mb-0 mt-1 text-sm text-neutral-400'>
                      Đơn giá: <span className='text-base font-medium text-neutral-900'>{formatPrice(40000)}</span>
                    </p>
                  </div>
                  <div className='mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end'>
                    <p className='w-20 shrink-0 text-base font-semibold text-neutral-900 sm:order-2 sm:ml-8 sm:text-right'>
                      {formatPrice(40000)}
                    </p>
                    <div className='sm:order-1'>
                      <QuantityButton />
                    </div>
                  </div>
                </div>
                <div className='absolute right-0 top-0 flex sm:bottom-0 sm:top-auto'>
                  <Button type='primary'>Xoá</Button>
                </div>
              </div>
            </li>
            <li className='flex flex-col space-y-3 py-4 lg:py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0'>
              <div className='shrink-0'>
                <Image className='h-24 w-24 max-w-full rounded-lg object-cover' alt='product' src={sp1} />
              </div>
              <div className='relative flex flex-1 flex-col justify-between'>
                <div className='sm:col-gap-5 sm:grid sm:grid-cols-2'>
                  <div className='pr-8 sm:pr-5'>
                    <p className='text-base font-semibold text-neutral-900 uppercase'>Trà sâm dứa Ngọc Quang</p>
                    <p className='mx-0 mb-0 mt-1 text-sm text-neutral-400'>
                      Đơn giá: <span className='text-base font-medium text-neutral-900'>{formatPrice(40000)}</span>
                    </p>
                  </div>
                  <div className='mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end'>
                    <p className='w-20 shrink-0 text-base font-semibold text-neutral-900 sm:order-2 sm:ml-8 sm:text-right'>
                      {formatPrice(40000)}
                    </p>
                    <div className='sm:order-1'>
                      <QuantityButton />
                    </div>
                  </div>
                </div>
                <div className='absolute right-0 top-0 flex sm:bottom-0 sm:top-auto'>
                  <Button type='primary'>Xoá</Button>
                </div>
              </div>
            </li>
            <li className='flex flex-col space-y-3 py-4 lg:py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0'>
              <div className='shrink-0'>
                <Image className='h-24 w-24 max-w-full rounded-lg object-cover' alt='product' src={sp1} />
              </div>
              <div className='relative flex flex-1 flex-col justify-between'>
                <div className='sm:col-gap-5 sm:grid sm:grid-cols-2'>
                  <div className='pr-8 sm:pr-5'>
                    <p className='text-base font-semibold text-neutral-900 uppercase'>Trà sâm dứa Ngọc Quang</p>
                    <p className='mx-0 mb-0 mt-1 text-sm text-neutral-400'>
                      Đơn giá: <span className='text-base font-medium text-neutral-900'>{formatPrice(40000)}</span>
                    </p>
                  </div>
                  <div className='mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end'>
                    <p className='w-20 shrink-0 text-base font-semibold text-neutral-900 sm:order-2 sm:ml-8 sm:text-right'>
                      {formatPrice(40000)}
                    </p>
                    <div className='sm:order-1'>
                      <QuantityButton />
                    </div>
                  </div>
                </div>
                <div className='absolute right-0 top-0 flex sm:bottom-0 sm:top-auto'>
                  <Button type='primary'>Xoá</Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <p className='font-medium text-neutral-900'>Tổng cộng:</p>
          <p className='text-2xl font-semibold text-neutral-900'>{formatPrice(400000)}</p>
        </div>
      </div>
    </div>
  )
}
