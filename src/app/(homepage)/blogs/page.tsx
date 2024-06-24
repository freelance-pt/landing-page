import { BlogCard } from '@/components'
import { Divider, Pagination } from '@/components/ui'

const BlogsPage = () => {
  return (
    <div className='max-w-screen-xl px-2 py-6 lg:px-0 mx-auto'>
      <div className='mb-8 w-full text-center '>
        <h1 className='text-2xl lg:text-3xl py-2 text-primary font-semibold capitalize font-curs'>Blog & Tin tức</h1>
        <Divider />
      </div>
      <div className='mt-8 flex flex-col lg:flex-row flex-wrap'>
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
