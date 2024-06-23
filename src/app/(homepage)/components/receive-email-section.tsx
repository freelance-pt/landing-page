export const ReceiveEmailSection = () => {
  return (
    <section className='py-8 px-4 2xl:px-0'>
      <div className='max-w-screen-xl w-full mx-auto '>
        <h4 className='font-medium text-lg text-primary mb-8'>NHẬN THÔNG TIN KHUYẾN MÃI & SẢN PHẨM MỚI.</h4>
      </div>
      <div className='max-w-screen-xl w-full mx-auto flex flex-col lg:flex-row gap-6'>
        <div className='w-full lg:w-6/12'>
          <p className='text-neutral-900 pt-3 pr-0 lg:pr-12'>
            Bạn để lại email tại đây, chúng tôi sẽ cập nhật tới bạn những thông tin mới nhất, sản phẩm mới, chương trình
            khuyến mãi từ TràSâmDứa.com
          </p>
        </div>
        <form className='w-full lg:w-6/12'>
          <div className='grid md:grid-cols-2 md:gap-6'>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                name='floating_name'
                id='floating_name'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor=''
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Tên của bạn
              </label>
            </div>
            <div className='relative z-0 w-full mb-5 group'>
              <input
                type='email'
                name='floating_email'
                id='floating_email'
                className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-600 peer'
                placeholder=' '
                required
              />
              <label
                htmlFor='floating_email'
                className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
              >
                Địa chỉ email
              </label>
            </div>
            <button
              type='submit'
              className='text-white bg-primary hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-100 font-medium rounded-lg text-sm px-2 py-2.5 text-center'
            >
              Gửi
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
