import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { TitleSection } from './title-section'

const BlogCard = dynamic(() => import('@/components/blog-card').then((mod) => mod.BlogCard), {
  ssr: false,
})

export const BlogSection = () => {
  return (
    <section className='py-8 px-4 2xl:px-0'>
      <div className='max-w-screen-xl mx-auto'>
        <TitleSection title='Blog & Tin Tức' />

        <div className='flex flex-col md:flex-row gap-8'>
          <div className='w-full h-full md:w-1/2 flex flex-col justify-between'>
            <BlogCard className='lg:w-full' />
            <Link href='/blogs'>
              <Button className='w-48 py-3 px-4 mx-4' type='primary'>
                Đọc thêm
              </Button>
            </Link>
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4'>
            <BlogCard layout='horizontal' />
            <BlogCard layout='horizontal' />
            <BlogCard layout='horizontal' />
          </div>
        </div>
      </div>
    </section>
  )
}
