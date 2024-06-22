'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import closeSvg from 'public/icons/close.svg'

type BottomDrawerProps = {
  open?: boolean
  type?: 'cart' | 'love'
  onClose?: () => void
}

export const BottomDrawer: React.FC<BottomDrawerProps> = ({ open, type, onClose }) => {
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        onClose?.()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      ref={drawerRef}
      className={`fixed inset-x-0 bottom-0 z-50 overflow-hidden transition-transform transform duration-700 ${
        open ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className='relative z-50 max-h-[50vh] w-full bg-green-50 overflow-auto'>
        <div className='fixed w-full bg-primary '>
          <div className='flex items-center w-full max-w-screen-xl mx-auto justify-between px-2 lg:px-0 py-2 text-white'>
            <h3 className='font-semibold text-lg'>
              {type === 'cart' ? `Giỏ hàng của bạn` : 'Danh sách sản phẩm yêu thích'}
            </h3>
            <button className='-m-2 p-2' onClick={onClose}>
              <Image src={closeSvg} alt='close' width={16} height={16} />
            </button>
          </div>
        </div>
        <div className='max-w-screen-xl mx-auto py-4 px-2 mt-8 lg:px-0'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti tenetur laboriosam alias cum. Soluta facilis
          ab minus sed corporis possimus ipsam temporibus eaque commodi recusandae porro velit adipisci, qui aliquid.
          Deserunt, harum? Ipsam quaerat soluta numquam explicabo, eveniet quibusdam debitis minus sed nemo vel cum
          voluptatibus dolorem alias in ullam. Temporibus voluptatum consectetur est labore nihil qui, velit dignissimos
          quod! Pariatur optio facilis ex voluptatum laudantium voluptas iure saepe natus, animi sed. Nulla consequatur
          consequuntur doloremque ab fuga similique reiciendis deleniti, debitis quas asperiores dolorem necessitatibus
          delectus dolorum id quae. Dolores, temporibus eum sit est quod laboriosam animi, eligendi aut laudantium
          molestias nihil doloremque. Modi corrupti assumenda molestias dolore, inventore, delectus doloremque
          repudiandae nobis enim, illum blanditiis minus eos maiores. Id accusamus, laboriosam voluptas non ut odio quo
          laudantium mollitia vel eos, illo voluptatibus, praesentium quas commodi quaerat dignissimos ab molestiae sed
          accusantium incidunt voluptatem ipsam. Voluptate eum nobis nemo! Eius hic repellendus reiciendis voluptate
          eveniet. Voluptate vel officiis culpa ducimus quia fugiat, aliquid harum odio quae, ipsum dolores doloribus
          doloremque. Quasi vero, sunt voluptatibus beatae eligendi exercitationem error magnam. Repellendus odio a
          officia alias atque id placeat doloremque, sint repudiandae! Eaque excepturi, voluptas molestias tenetur ullam
          expedita natus autem dolorem, sit non aperiam est ex! Est fuga reprehenderit dolores. Quo sed accusamus sunt
          ab autem repellat suscipit animi ratione ipsam. Quisquam quam voluptates voluptate quo sed ducimus optio illo,
          impedit laboriosam expedita omnis non. Ipsum perspiciatis repellat nostrum debitis? Culpa vero deleniti, nobis
          corrupti nam sit delectus, animi sequi eveniet cumque fugit rem molestias dolores repellat minus voluptatibus
          eligendi enim ipsam rerum, eaque voluptate. Nihil odio pariatur ullam. Cumque? Natus explicabo sit nam. Qui,
          suscipit nesciunt molestiae asperiores numquam reiciendis. Odio voluptatibus distinctio, dolore id expedita
          dicta reiciendis? Nobis sed obcaecati dolore optio. Dicta tenetur consequuntur illo maiores aspernatur!
        </div>
      </div>
      <div className='fixed inset-0' onClick={onClose} />
    </div>
  )
}
