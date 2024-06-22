import Image from 'next/image'
import blogImage from 'public/tea-plantation.jpeg'

export const BlogCard = () => {
  return (
    <div className='w-full lg:w-1/3 px-4 mb-8 group'>
      <div className='bg-white group-hover:shadow-lg rounded-lg overflow-hidden'>
        <Image
          className='w-full h-48 object-cover object-center group-hover:scale-110 transition duration-200 ease-in'
          src={blogImage}
          alt='blog'
        />
        <div className='p-4'>
          <h4 className='text-lg lg:text-xl font-medium lg:font-bold text-neutral-900 group-hover:text-primary cursor-pointer truncate'>
            Blog title Blog title Blog title Blog title
          </h4>
          <p className='text-neutral-600 my-2 lg:my-4 line-clamp-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in mauris nec dui fermentum eleifend.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in mauris nec dui fermentum eleifend.
          </p>
          <a href='#' className='text-primary hover:underline'>
            Đọc thêm
          </a>
        </div>
      </div>
    </div>
  )
}
