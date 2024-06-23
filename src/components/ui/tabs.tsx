import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type TabsProps = {
  tabs?: { key: string; label: string }[]
  activeTab?: string
  onChangeTab?: (tab: string) => void
  className?: string
  aditionalButton?: ReactNode
}

export const Tabs = ({ tabs, activeTab, onChangeTab, className, aditionalButton }: TabsProps) => {
  return (
    <div
      className={cn(
        'text-sm font-medium text-center text-gray-500 border-b border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-0',
        className
      )}
    >
      <ul className='flex flex-wrap -mb-px'>
        {tabs?.map((tab) => (
          <li
            key={tab.key}
            className={cn(
              'me-2 inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-green-700 hover:border-green-700 duration-400 ease-in-out cursor-pointer',
              activeTab === tab.key && 'text-primary border-primary'
            )}
            onClick={() => onChangeTab?.(tab.key)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div>{aditionalButton}</div>
    </div>
  )
}
