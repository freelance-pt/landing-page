import Image from 'next/image'
import sp1 from 'public/sp1.jpeg'
import { Button, QuantityButton } from '../ui'

export const BoxShoppingCart = () => {
  return (
    <div className='mx-auto'>
      <div className='bg-white'>
        <div className='flow-root'>
          <ul className='-my-8'>
            <li className='flex flex-col space-y-3 py-4 lg:py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0'>
              <div className='shrink-0'>
                <Image className='h-24 w-24 max-w-full rounded-lg object-cover' alt='product' src={sp1} />
              </div>
              <div className='relative flex flex-1 flex-col justify-between'>
                <div className='sm:col-gap-5 sm:grid sm:grid-cols-2'>
                  <div className='pr-8 sm:pr-5'>
                    <p className='text-base font-semibold text-gray-900 uppercase'>Trà sâm dứa Ngọc Quang</p>
                    <p className='mx-0 mb-0 mt-1 text-sm text-gray-400'>40000</p>
                  </div>
                  <div className='mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end'>
                    <p className='w-20 shrink-0 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right'>
                      $259.00
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
                    <p className='text-base font-semibold text-gray-900 uppercase'>Trà sâm dứa Ngọc Quang</p>
                    <p className='mx-0 mb-0 mt-1 text-sm text-gray-400'>40000</p>
                  </div>
                  <div className='mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end'>
                    <p className='w-20 shrink-0 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right'>
                      $259.00
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
          <p className='text-sm font-medium text-gray-900'>Total</p>
          <p className='text-2xl font-semibold text-gray-900'>
            <span className='text-xs font-normal text-gray-400'>USD</span> 408.00
          </p>
        </div>
        <div className='mt-6 text-center'>
          <button
            type='button'
            className='uppercase w-full rounded-md bg-primary px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out hover:bg-gray-800 focus:shadow'
          >
            Đi đến trang thanh toán
          </button>
        </div>
      </div>
    </div>
  )
}
