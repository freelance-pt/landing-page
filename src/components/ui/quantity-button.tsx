export const QuantityButton = () => {
  return (
    <div className='max-w-xs'>
      <div className='relative flex items-center max-w-[5rem]'>
        <button
          type='button'
          id='decrement-button'
          data-input-counter-decrement='quantity-input'
          className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s px-1 py-1 focus:ring-gray-100 focus:ring-2 focus:outline-none'
        >
          <svg
            className='w-3 h-3 text-gray-900'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 2'
          >
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M1 1h16' />
          </svg>
        </button>
        <input
          type='text'
          id='quantity-input'
          data-input-counter
          data-input-counter-min={1}
          data-input-counter-max={50}
          aria-describedby='helper-text-explanation'
          className='bg-gray-50 border-x-0 border-gray-300 text-center border text-gray-900 text-sm block w-full focus:outline-none'
          defaultValue={5}
          required
        />
        <button
          type='button'
          id='increment-button'
          data-input-counter-increment='quantity-input'
          className='bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e px-1 py-1 focus:ring-gray-100 focus:ring-2 focus:outline-none'
        >
          <svg
            className='w-3 h-3 text-gray-900'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 18 18'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 1v16M1 9h16'
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
