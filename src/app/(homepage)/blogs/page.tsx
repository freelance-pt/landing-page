import dynamic from 'next/dynamic'
import { Metadata } from 'next'
import { Divider, Pagination } from '@/components/ui'
import { BlogsFilter } from './components/blogs-filter'

const BlogCard = dynamic(() => import('@/components/blog-card').then((mod) => mod.BlogCard), {
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Blog & Tin tức',
  description: 'Cập nhật tin tức mới nhất từ trasamdua.com',
}

const BlogsPage = () => {
  return (
    <div className='max-w-screen-xl px-2 py-6 lg:px-0 mx-auto'>
      <div className='mb-8 w-full text-center '>
        <h1 className='text-2xl lg:text-3xl py-2 text-primary font-semibold capitalize font-curs'>Blog & Tin tức</h1>
        <Divider />
      </div>
      <BlogsFilter />
      <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>

      <Pagination page={1} pageSize={3} />
    </div>
  )
}

export default BlogsPage
