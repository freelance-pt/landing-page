'use client'

import { useState } from 'react'
import { ProductCard } from '@/components'
import { Button, Tabs } from '@/components/ui'
import { productCategoriesMapping } from '@/lib/contants'
import { TitleSection } from './title-section'

const TABS = Object.keys(productCategoriesMapping).map((key) => ({
  key,
  label: productCategoriesMapping[Number(key)],
}))

export const ProductSection = () => {
  const [activeTab, setActiveTab] = useState<string>(TABS[0].key)

  const onChangeTab = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <section>
      <div className='max-w-screen-xl mx-auto py-8 px-4 2xl:px-0'>
        <TitleSection title='Sản Phẩm Trà Sâm Dứa' />

        <Tabs
          className='mb-8'
          tabs={TABS}
          activeTab={activeTab}
          onChangeTab={onChangeTab}
          aditionalButton={
            <Button className='border-none flex items-center gap-1 hover:gap-2 hover:bg-transparent duration-200 ease-in-out'>
              <span>Xem tất cả sản phẩm</span>
              <span>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </Button>
          }
        />

        <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  )
}
