import { ProductCard } from '@/components'
import { Divider, Pagination } from '@/components/ui'
import { ProductsFilter } from './components/products-filter'

const ProductPage = () => {
  return (
    <div className='max-w-screen-xl px-2 py-6 lg:px-0 mx-auto'>
      <div className='mb-8 w-full text-center '>
        <h1 className='text-2xl lg:text-3xl py-2 text-primary font-semibold capitalize font-curs'>
          Bộ sưu tập trà của chúng tôi
        </h1>
        <Divider />
      </div>

      <ProductsFilter />

      <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <Pagination page={1} pageSize={3} />
    </div>
  )
}

export default ProductPage
