import Image from 'next/image'
import shipSvg from 'public/icons/ship.svg'
import moneySvg from 'public/icons/money.svg'
import arrowDownSvg from 'public/icons/arrow-down-circle.svg'
import teaPlantation from 'public/tea-plantation.jpeg'
import { ProductSection } from './components/product-section'
import { BlogSection } from './components/blog-section'
import { Carousels } from './components/carousels'
import { TitleSection } from './components/title-section'
import { ReceiveEmailSection } from './components/receive-email-section'

export default function Home() {
  return (
    <>
      <Carousels />

      <section className='w-full'>
        <div className='max-w-screen-xl mx-auto py-8 px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='w-full flex items-center justify-center py-3 border-2 border-primary'>
            <Image src={shipSvg} alt='shipping' width={56} height={56} className='text-primary' />
            <div className='ml-4'>
              <h3 className='font-sm uppercase text-primary font-semibold mb-1'>Giao hàng nhanh chóng</h3>
              <p className='text-neutral-900'>
                Miễn phí giao hàng cho
                <br />
                đơn hàng trên 500k
              </p>
            </div>
          </div>
          <div className='w-full flex items-center justify-center py-3 border-2 border-primary'>
            <Image src={moneySvg} alt='save' width={56} height={56} className='text-primary' />
            <div className='ml-4'>
              <h3 className='font-sm uppercase text-primary font-semibold mb-1'>Tiết kiệm chi phí</h3>
              <p className='text-neutral-900'>
                Giá cả hợp lý không qua <br />
                khâu trung gian
              </p>
            </div>
          </div>
          <div className='w-full flex items-center justify-center border-2 border-primary py-3'>
            <Image src={arrowDownSvg} alt='good quality' width={56} height={56} className='text-primary' />
            <div className='ml-4'>
              <h3 className='font-sm uppercase text-primary font-semibold mb-1'>Đảm bảo chất lượng</h3>
              <p className='text-neutral-900'>
                Sử dụng hương liệu an toàn,
                <br />
                không hoá chất
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-green-50'>
        <div className='max-w-screen-xl mx-auto py-8 px-4 2xl:px-0'>
          <TitleSection
            title='Trà Sâm Dứa Ngọc Quang'
            label='được dùng nguồn trà rộng khắp tại Bảo Lộc, nguyên liệu được thu mua trực tiếp tại các nhà máy chế biến trà
              tươi, không lẫn tạp chất.'
          />
          <div className='w-full px-4 lg:px-0 grid grid-cols-2 lg:grid-cols-4 gap-4'>
            <div className='w-full mb-5'>
              <h3 className='font-medium text-lg text-primary pb-3'>Hương liệu an toàn</h3>
              <p className='text-neutral-900'>
                Sử dụng hương liệu an toàn dùng trong thực phẩm, tuyệt đối không dùng các hóa chất độc hại.
              </p>
            </div>
            <div className='w-full mb-5'>
              <h3 className='font-medium text-lg text-primary pb-3'>Uy tín hàng đầu</h3>
              <p className='text-neutral-900'>
                Là một trong những cơ sở sản xuất bới truyền thống 4 đời làm nghề trà ở Lâm Đồng mang đến những sản phẩm
                trà thơm ngon thượng hạng.
              </p>
            </div>
            <div className='w-full mb-5'>
              <h3 className='font-medium text-lg text-primary pb-3'>Hương thơm quyến rũ</h3>
              <p className='text-neutral-900'>
                Tận dụng khả năng giữ hương hiệu quả của trà nguyên liệu trà Bảo Lộc, Ngọc Quang đã thử nghiệm thành
                công khi đưa mùi hương dứa đặc sản miền nam vào trà xanh.
              </p>
            </div>
            <div className='w-full mb-5'>
              <h3 className='font-medium text-lg text-primary pb-3'>Mùi và Vị</h3>
              <p className='text-neutral-900'>
                Đặc biệt được dùng toàn nguyên liệu thiên nhiên, hương liệu được chọn lọc tinh khiết, vừa có hậu ngọt,
                vừa có khả năng tẩm hương cực tốt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProductSection />

      <section>
        <Image
          src={teaPlantation}
          alt='Banner'
          className='max-w-screen-xl w-full mx-auto h-36 lg:h-56 object-cover rounded-none lg:rounded-lg'
        />
      </section>

      <BlogSection />

      <ReceiveEmailSection />
    </>
  )
}
