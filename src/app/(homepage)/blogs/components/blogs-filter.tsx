'use client'

import { Dropdown } from '@/components/ui'

export const BlogsFilter = () => {
  return (
    <div className='p-2 mb-6 flex flex-wrap items-center gap-4'>
      <Dropdown
        label='Danh mục bài viết'
        items={[
          {
            key: 'blog',
            label: 'Blog',
          },
          {
            key: 'news',
            label: 'Tin tức',
          },
        ]}
      />
      <Dropdown
        label='Sắp xếp'
        items={[
          {
            key: 'newest',
            label: 'Mới nhất',
          },
          {
            key: 'oldest',
            label: 'Cũ nhất',
          },
        ]}
      />
    </div>
  )
}
