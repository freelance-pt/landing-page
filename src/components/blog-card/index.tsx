import Image from 'next/image'
import { cn } from '@/lib/utils'
import blogImage from 'public/tea-plantation.jpeg'

type BlogCardProps = {
  className?: string
}

export const BlogCard = ({ className }: BlogCardProps) => {
  return (
    <div className={cn('w-full lg:w-1/3 px-4 mb-8 group', className)}>
      <div className='bg-white group-hover:shadow-lg rounded-lg overflow-hidden'>
        <Image
          className='w-full h-48 object-cover object-center group-hover:scale-110 transition duration-200 ease-in'
          src={blogImage}
          alt='blog'
        />
        <div className='p-4'>
          <div>
            <span className='text-neutral-600 text-xs font-medium py-1 italic mr-4'>20/10/2021</span>
            <span className='text-primary bg-green-50 text-xs py-1 px-4'>Góc Tư vấn</span>
          </div>
          <h4 className='mt-2 text-lg lg:text-xl font-medium lg:font-bold text-neutral-900 group-hover:text-primary cursor-pointer truncate'>
            Blog title
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
