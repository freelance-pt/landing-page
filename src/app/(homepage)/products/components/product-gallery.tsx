'use client'

import Image from 'next/image'
import { useState } from 'react'
import sp1 from 'public/sp1.jpeg'
import sp2 from 'public/sp2.png'
import sp3 from 'public/sp3.png'
import sp4 from 'public/sp4.jpg'

export const ProductGallery = () => {
  const [activePropduct, setActiveProduct] = useState<number>(0)
  const products = [sp1, sp2, sp3, sp4]
  return (
    <div className='lg:col-span-3 lg:row-end-1'>
      <div className='lg:flex lg:items-start'>
        <div className='lg:order-2 lg:ml-5'>
          <div className='max-w-xl overflow-hidden rounded-lg'>
            <div className='w-full h-full lg:h-[500px] lg:w-[500px]  aspect-square'>
              <Image
                className='h-full w-full max-w-full object-cover'
                src={products[activePropduct]}
                alt='Trà sâm dứa Ngọc Quang'
              />
            </div>
          </div>
        </div>
        <div className='mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0'>
          <div className='flex flex-row items-start flex-wrap lg:flex-col'>
            {products.map((product, index) => (
              <button
                key={index}
                type='button'
                className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 ${
                  index === activePropduct ? 'border-primary text-center' : 'border-transparent text-center'
                }`}
                onClick={() => setActiveProduct(index)}
              >
                <Image className='h-full w-full max-w-full object-cover' src={product} alt='Trà sâm dứa Ngọc Quang' />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
