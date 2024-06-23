'use client'

import { useState } from 'react'
import { Tabs } from '@/components/ui'

const TABS = [
  {
    key: 'description',
    label: 'Mô tả sản phẩm',
  },
  {
    key: 'howto',
    label: 'Cách pha trà sâm dứa',
  },
  {
    key: 'benefit',
    label: 'Tác dụng của trà sâm dứa',
  },
]

export const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].key)
  return (
    <Tabs
      tabs={[
        {
          key: 'description',
          label: 'Mô tả sản phẩm',
        },
        {
          key: 'howto',
          label: 'Cách pha trà sâm dứa',
        },
        {
          key: 'benefit',
          label: 'Tác dụng của trà sâm dứa',
        },
      ]}
      activeTab={activeTab}
      onChangeTab={(tab) => setActiveTab(tab)}
      className='mt-4 text-base font-medium'
    />
  )
}
