import Image from 'next/image'
import logo from 'public/logo-green.png'
import { ReceiveEmailSection } from './receive-email-section'

type FooterProps = {
  isCartLayout?: boolean
}

export const Footer = ({ isCartLayout }: FooterProps) => {
  return (
    <>
      {!isCartLayout ? <ReceiveEmailSection /> : null}
      <footer className='bg-green-50 font-sans'>
        <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
          <div className='md:flex md:justify-between'>
            <div className='mb-6 md:mb-0 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-6 item-center'>
              <div className='flex flex-col gap-8'>
                <div>
                  <Image className='block w-auto h-14' src={logo} alt='logo' width={56} height={56} />
                </div>
                <div>
                  <h2 className='mb-4 text-sm font-semibold text-primary uppercase'>LIÊN KẾT VỚI CHÚNG TÔI</h2>
                  <iframe
                    width='250px'
                    height='150px'
                    data-testid='fb:page Facebook Social Plugin'
                    title='fb:page Facebook Social Plugin'
                    allow='encrypted-media'
                    src='https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfaf558a74b34281cb%26domain%3Dtrasamdua.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Ftrasamdua.com%252Ff91f6ec8d7b1e77ee%26relation%3Dparent.parent&container_width=219&height=150&hide_cover=true&href=https%3A%2F%2Fwww.facebook.com%2Ftrasamdua%2F&locale=vi_VN&sdk=joey&show_facepile=true&small_header=true&tabs=timeline&width=250'
                    style={{ border: 'none', visibility: 'visible', width: 219, height: 150 }}
                  />
                </div>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-primary uppercase'>TRÀSÂMDỨA.COM</h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <p>Chuyên cung cấp các loại:</p>
                    <p>Trà Sâm Dứa, trà Đà Nẵng,</p>
                    <p>trà Lài Lâm Đồng tại Hà Nội - HCM</p>
                  </li>
                  <li className='mb-4'>
                    <p>Số 68, Ngõ 54, Đường Lê Quang Đạo,</p>
                    <p>Q.Nam Từ liêm, Hà Nội.</p>
                    <p>Hotline : 0985.136.914</p>
                  </li>
                  <li className='mb-4'>
                    <p>Cơ sỏ Sản Xuất:</p>
                    <p>78A, Châu Văn Liêm, Lộc Tiến,</p>
                    <p>Tp.Bảo Lộc-Lâm Đồng</p>
                    <p>Hotline : 02633868485</p>
                  </li>
                  <li>
                    <p>email: trasamdua.com@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-primary uppercase'>THÔNG TIN</h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <a href='https://flowbite.com/' className='hover:underline'>
                      Thông tin công ty
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='https://tailwindcss.com/' className='hover:underline'>
                      Tuyển dụng
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='https://tailwindcss.com/' className='hover:underline'>
                      Chính sách đại lý
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='https://tailwindcss.com/' className='hover:underline'>
                      Câu hỏi thường gặp
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='https://tailwindcss.com/' className='hover:underline'>
                      Hướng dẫn đặt hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className='mb-6 text-sm font-semibold text-primary uppercase'>HỖ TRỢ</h2>
                <ul className='text-gray-500 font-medium'>
                  <li className='mb-4'>
                    <a href='https://github.com/themesberg/flowbite' className='hover:underline '>
                      Dịch vụ sau bán hàng
                    </a>
                  </li>
                  <li className='mb-4'>
                    <a href='https://github.com/themesberg/flowbite' className='hover:underline '>
                      Hướng dẫn khách hàng
                    </a>
                  </li>
                  <li>
                    <a href='https://discord.gg/4eeurUVvTy' className='hover:underline'>
                      Câu hỏi thường gặp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8' />
          <div className='flex items-center justify-center'>
            <span className='text-lg text-primary sm:text-center'>trasamdua.com</span>
          </div>
        </div>
      </footer>
    </>
  )
}
