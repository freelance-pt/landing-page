'use client'

import { useCallback, useState } from 'react'
import { Tabs } from '@/components/ui'
import { TeaInstructions } from '@/components/tea-instructions'
import { TeaDescrioption } from '@/components/tea-description'

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

  const renderTabContent = useCallback(() => {
    //render tab content based on active tab
    switch (activeTab) {
      case 'description':
        return <TeaDescrioption />
      case 'howto':
        return <TeaInstructions />
      case 'benefit':
        return (
          <div className='mx-auto p-4 flex flex-col gap-4'>
            <p className='text-gray-800'>
              Các thiamine trong trà đã được chứng minh để tạo ra một tác dụng làm dịu bớt căng thẳng. Nếu bạn cảm thấy
              quá căng thẳng bạn có thể uống thử một tách trà và cảm nhận sự khác biệt. Trà khử chất caffein và bạn có
              thể uống trà xanh thay thế cafe.
            </p>
            <p>
              Bên cạnh đó, trà sâm dứa còn được dùng như một loại thức uống để làm mát cơ thể, nhất là trong những ngày
              khí hậu nóng nực.
            </p>
            <blockquote className='italic text-primary bg-green-50 p-4 border-l-2 border-l-primary'>
              Theo nghiên cứu của Đại học Quốc gia Singapore cho thấy uống trà hàng ngày có thể giúp bạn giảm 50% nguy
              cơ mất trí nhớ.
            </blockquote>
          </div>
        )
    }
  }, [activeTab])
  return (
    <>
      <Tabs
        tabs={TABS}
        activeTab={activeTab}
        onChangeTab={(tab) => setActiveTab(tab)}
        className='mt-4 text-base font-medium'
      />
      {renderTabContent()}
    </>
  )
}
