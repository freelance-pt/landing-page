import Link from 'next/link'
import { Metadata } from 'next'
import { BoxShoppingCart } from '@/components/boxes-shopping-cart'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui'
import { ShippingAddressForm } from './components/shipping-address-form'

export const metadata: Metadata = {
  title: 'Mua trà sâm dứa tại trasamdua.com',
  description:
    'Mua trà sâm dứa ngon, chất lượng tại Trà Sâm Dứa Ngọc Quang. Miễn phí giao hàng nội thành Hà Nội với đơn hàng từ 10 gói trở lên.',
}

const CartPage = () => {
  return (
    <div className='max-w-screen-xl mx-auto px-4 lg-px-0 py-6 lg:py-8'>
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
        <div className='w-full lg:w-1/2'>
          <div className=' mt-6 border-b-2 border-primary' />
          <p className='mt-2 text-neutral-600 py-4 italic'>Hiện có 3 sản phẩm trong giỏ hàng:</p>
          <BoxShoppingCart />
          <Link href='/'>
            <Button className='mt-6 px-4'>{'< Tiếp tục mua sắm'}</Button>
          </Link>
        </div>
        <div className='w-full lg:w-1/2 px-0 lg:px-6'>
          <div className='w-full border-t-primary border-t-4 rounded-t-sm rounded-b-xl bg-green-50 p-4 lg:p-6'>
            <h4 className='uppercase font-lg font-semibold'>Hoá đơn</h4>
            <div className='flex items-center justify-between mt-4'>
              <p className='text-lg font-medium'>Tổng sản phẩm: </p>
              <p className='text-lg font-medium'>3</p>
            </div>

            <div className=' mt-4 border-b-4 border-yellow-500' />

            <div className='flex items-center justify-between my-8'>
              <div>
                <p className='text-lg font-medium'>Tổng tiền: </p>
                <p className='italic text-neutral-600'>{`*chưa bao gồm chi phí giao hàng`}</p>
              </div>
              <p className='text-lg font-semibold text-primary'>{formatPrice(400000)}</p>
            </div>

            <ShippingAddressForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
