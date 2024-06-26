'use client'

import { useState } from 'react'

type DropdownProps = {
  items?: {
    key: string
    label: string
  }[]
  label: string
}

export const Dropdown = ({ items, label }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDropdown = () => setIsOpen(!isOpen)
  const closeDropdown = () => setIsOpen(false)

  return (
    <>
      {isOpen && <div className='fixed inset-0 bg-black bg-opacity-20 z-30' onClick={closeDropdown}></div>}
      <div className='relative'>
        <button
          id='dropdownCheckboxButton'
          data-dropdown-toggle='dropdownDefaultCheckbox'
          className='text-white w-48 bg-primary hover:bg-green-600 focus:outline-none rounded text-sm px-2 py-1 flex justify-between items-center z-10'
          type='button'
          onClick={toggleDropdown}
        >
          {label}
          <svg
            className='w-2.5 h-2.5 ms-3'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 10 6'
          >
            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='m1 1 4 4 4-4' />
          </svg>
        </button>

        <div
          id='dropdownDefaultCheckbox'
          className={`${isOpen ? '' : 'hidden'} z-30 w-48 bg-white divide-y divide-gray-100 rounded shadow absolute`}
        >
          <ul className='p-3 space-y-3 text-sm text-gray-700' aria-labelledby='dropdownCheckboxButton'>
            <li>
              <div className='flex flex-col items-start gap-2'>
                {/* <input
                  id='checkbox-item-3'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'
                /> */}
                {items?.map((i) => (
                  <label
                    key={i.key}
                    htmlFor='checkbox-item-3'
                    className='ms-2 text-left text-sm font-medium text-gray-900 hover:text-primary cursor-pointer'
                    onClick={closeDropdown}
                  >
                    {i.label}
                  </label>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
