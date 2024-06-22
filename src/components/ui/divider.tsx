import Image from 'next/image'
import leafSvg from 'public/icons/leaf.svg'

export const Divider = () => {
  return (
    <div className='flex items-center justify-center'>
      <div>
        <svg className='w-28 h-4' viewBox='0 0 1000 40' preserveAspectRatio='none'>
          <path
            d='M0 20 Q 25 0, 50 20 Q 75 40, 100 20 Q 125 0, 150 20 Q 175 40, 200 20 Q 225 0, 250 20 Q 275 40, 300 20 Q 325 0, 350 20 Q 375 40, 400 20 Q 425 0, 450 20 Q 475 40, 500 20 Q 525 0, 550 20 Q 575 40, 600 20 Q 625 0, 650 20 Q 675 40, 700 20 Q 725 0, 750 20 Q 775 40, 800 20 Q 825 0, 850 20 Q 875 40, 900 20 Q 925 0, 950 20 Q 975 40, 1000 20'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            className='text-primary'
          />
        </svg>
      </div>
      <Image src={leafSvg} alt='tea' width={24} height={24} />
      <div>
        <svg className='w-28 h-4' viewBox='0 0 1000 40' preserveAspectRatio='none'>
          <path
            d='M0 20 Q 25 0, 50 20 Q 75 40, 100 20 Q 125 0, 150 20 Q 175 40, 200 20 Q 225 0, 250 20 Q 275 40, 300 20 Q 325 0, 350 20 Q 375 40, 400 20 Q 425 0, 450 20 Q 475 40, 500 20 Q 525 0, 550 20 Q 575 40, 600 20 Q 625 0, 650 20 Q 675 40, 700 20 Q 725 0, 750 20 Q 775 40, 800 20 Q 825 0, 850 20 Q 875 40, 900 20 Q 925 0, 950 20 Q 975 40, 1000 20'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            className='text-primary'
          />
        </svg>
      </div>
    </div>
  )
}
