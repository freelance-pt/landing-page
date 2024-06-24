'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import blogImage from 'public/tea-plantation.jpeg'

type BlogCardProps = {
  className?: string
  layout?: 'horizontal' | 'vertical'
  imageHeight?: string
}

export const BlogCard = ({ className, layout = 'vertical', imageHeight = 'h-48' }: BlogCardProps) => {
  const router = useRouter()

  return (
    <div
      className={cn('w-full px-0 lg:px-4 mb-8 group cursor-pointer', className)}
      onClick={() => router.push('/blogs/blog-title')}
    >
      <div
        className={`bg-white group-hover:shadow-lg rounded-lg overflow-hidden ${layout === 'horizontal' ? 'flex' : ''}`}
      >
        <div className={layout === 'horizontal' ? `w-1/3` : `${imageHeight}`}>
          <Image
            className='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200 ease-in'
            src={blogImage}
            alt='blog'
          />
        </div>
        <div className={`p-4 ${layout === 'horizontal' ? 'w-2/3' : ''}`}>
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
        </div>
      </div>
    </div>
  )
}
