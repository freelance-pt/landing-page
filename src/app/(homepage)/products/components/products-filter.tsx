'use client'

import { Dropdown } from '@/components/ui'

export const ProductsFilter = () => {
  return (
    <div className='p-2 mb-6 flex items-center gap-4'>
      <Dropdown label='Danh mục sẩn phẩm' />
      <Dropdown label='Sắp xếp' />
    </div>
  )
}
