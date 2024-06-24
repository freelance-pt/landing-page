'use client'

import React, { useState } from 'react'

export const ShippingAddressForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    note: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log('Form data submitted:', formData)
    // Add logic to handle form submission, e.g., sending data to an API
  }

  return (
    <>
      <h4 className='uppercase font-lg font-semibold text-primary mb-6'>ĐỊA CHỈ GIAO HÀNG</h4>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
            Họ và tên
          </label>
          <input
            placeholder='Họ và tên của bạn'
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
            required
          />
        </div>
        <div>
          <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
            Email
          </label>
          <input
            placeholder='Email của bạn'
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
            required
          />
        </div>
        <div>
          <label htmlFor='phone' className='block text-sm font-medium text-gray-700'>
            Số điện thoại
          </label>
          <input
            placeholder='Số điện thoại của bạn'
            type='tel'
            name='phone'
            id='phone'
            value={formData.phone}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
            required
          />
        </div>
        <div>
          <label htmlFor='address' className='block text-sm font-medium text-gray-700'>
            Địa chỉ
          </label>
          <input
            placeholder='Địa chỉ của bạn'
            type='text'
            name='address'
            id='address'
            value={formData.address}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
            required
          />
        </div>
        <div>
          <label htmlFor='note' className='block text-sm font-medium text-gray-700'>
            Ghi chú
          </label>
          <textarea
            placeholder='Ghi chú (nếu có): Giao hàng giờ hành chính, ...'
            name='note'
            id='note'
            value={formData.note}
            onChange={handleChange}
            className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
          />
        </div>
        <button
          type='submit'
          className='inline-flex w-full justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
        >
          Đặt hàng
        </button>
      </form>
    </>
  )
}
