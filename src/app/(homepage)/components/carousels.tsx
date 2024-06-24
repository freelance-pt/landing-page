'use client'

import Image from 'next/image'

import { useEffect, useState } from 'react'
import banner1 from 'public/banner-tra-sam-dua-1.jpg'
import banner2 from 'public/banner-tra-sam-dua-2.jpg'

export const Carousels = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const items = [banner1, banner2, banner1, banner2]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % items.length)
    }, 3000) // Change the interval time here (in milliseconds)

    return () => clearInterval(interval)
  }, [currentSlide, items.length])

  const onPrevClick = () => {
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const onNextClick = () => {
    setCurrentSlide((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <section>
      <div id='default-carousel' className='relative w-full max-w-screen-xl mx-auto' data-carousel='slide'>
        {/* Carousel wrapper */}
        <div className='relative overflow-hidden aspect-[2.39/1] w-full'>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${index === currentSlide ? 'opacity-100' : 'opacity-0'} duration-700 ease-in-out`}
              data-carousel-item
            >
              <Image
                src={item}
                className='absolute block w-full min-h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                alt={`Slide ${index + 1}`}
                objectFit='cover'
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className='absolute z-30 hidden lg:flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
          {items.map((_, index) => (
            <button
              key={index}
              type='button'
              className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-white/50'}`}
              aria-current={index === currentSlide}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              data-carousel-slide-to={index}
            />
          ))}
        </div>
        {/* Slider controls */}
        <button
          type='button'
          className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
          onClick={onPrevClick}
        >
          <span className='inline-flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none'>
            <svg
              className='w-3 h-3 lg:w-4 lg:h-4 text-white rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
          onClick={onNextClick}
        >
          <span className='inline-flex items-center justify-center w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none'>
            <svg
              className='w-3 h-3 lg:w-4 lg:h-4 text-white rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m1 9 4-4-4-4'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </section>
  )
}
