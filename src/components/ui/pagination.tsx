import { cn } from '@/lib/utils'
import LeftArrow from 'public/icons/left-arrow.svg'
import RightArrow from 'public/icons/right-arrow.svg'

const RANGE = 2
export const Pagination = ({ page = 1, pageSize = 12 }: { page: number; pageSize: number }) => {
  const renderPagination = () => {
    let dotAfter = false
    let dotBefore = false
    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true
        return (
          <span key={index} className='mx-2 rounded bg-white py-1 px-2 shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true
        return (
          <span key={index} className='mx-2 rounded bg-white py-1 px-2 shadow-sm'>
            ...
          </span>
        )
      }
      return null
    }
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1

        if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
          return renderDotAfter(index)
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index)
          } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
            return renderDotAfter(index)
          }
        } else if (page >= pageSize - RANGE * 2 && pageNumber < page - RANGE && pageNumber > RANGE) {
          return renderDotBefore(index)
        }
        return (
          <span
            key={index}
            className={cn('mx-2 rounded border bg-white py-1 px-2 shadow-sm cursor-pointer', {
              'border-primary': pageNumber === page,
              'border-transparent': pageNumber !== page,
            })}
          >
            {pageNumber}
          </span>
        )
      })
  }

  return (
    <div className='mt-6 flex flex-wrap justify-center items-center'>
      <LeftArrow
        className={`mx-2 ${
          page === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
        } rounded border bg-white/60 py-1 px-2 shadow-sm h-6 w-6`}
      />
      {renderPagination()}
      <RightArrow
        className={`mx-2 ${
          page === pageSize ? 'cursor-not-allowed' : 'cursor-pointer'
        } rounded border bg-white/60 py-1 px-2 shadow-sm h-6 w-6`}
      />
    </div>
  )
}
