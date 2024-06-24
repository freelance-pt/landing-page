'use client'

import { Dropdown } from '@/components/ui'
import { productCategoriesMapping } from '@/lib/contants'

export const ProductsFilter = () => {
  return (
    <div className='p-2 mb-6 flex flex-wrap items-center gap-4'>
      <Dropdown
        label='Danh mục sản phẩm'
        items={Object.keys(productCategoriesMapping).map((key) => ({
          key,
          label: productCategoriesMapping[Number(key)],
        }))}
      />
      <Dropdown
        label='Sắp xếp'
        items={[
          {
            key: 'newest',
            label: 'Mới nhất',
          },
          {
            key: 'priceAsc',
            label: 'Giá tăng dần',
          },
          {
            key: 'priceDesc',
            label: 'Giá giảm dần',
          },
        ]}
      />
    </div>
  )
}
