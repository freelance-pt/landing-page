import { BlogCard } from '@/components/blog-card'
import { Divider } from '@/components/ui'

export const BlogSection = () => {
  return (
    <section className='py-8 px-4 2xl:px-0'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='w-full text-center mb-10'>
          <h2 className='font-curs text-primary my-3 text-2xl lg:text-4xl'>Blog & Tin Tức</h2>
          <Divider />
        </div>

        <div className='my-3 border-l-2 lg:border-l-4 border-solid border-primary'>
          <h3 className='pl-4 text-xl lg:text-2xl font-senibold lg:font-bold text-neutral-900 hover:text-primary cursor-pointer'>
            Blog
          </h3>
        </div>

        <div className='mt-8 flex flex-col lg:flex-row flex-wrap'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <div className='my-3 border-l-2 lg:border-l-4 border-solid border-primary'>
          <h3 className='pl-4 text-xl lg:text-2xl font-senibold lg:font-bold text-neutral-900 hover:text-primary cursor-pointer'>
            Góc tư vấn
          </h3>
        </div>

        <div className='mt-8 flex flex-col lg:flex-row flex-wrap'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <div className='my-3 border-l-2 lg:border-l-4 border-solid border-primary'>
          <h3 className='pl-4 text-xl lg:text-2xl font-senibold lg:font-bold text-neutral-900 transform hover:text-primary cursor-pointer'>
            Trà và sức khỏe
          </h3>
        </div>

        <div className='mt-8 flex flex-col lg:flex-row flex-wrap'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

        <button className='my-10 px-6 py-2 bg-green-50 uppercase font-semibold block mx-auto hover:bg-primary hover:text-white transition duration-200 ease-in'>
          xem thêm
        </button>
      </div>
    </section>
  )
}
