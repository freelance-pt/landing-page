import { ReactNode } from 'react'
import { Footer, Header } from '@/components'

type LayoutProps = {
  children?: ReactNode
}

export default function HomePageLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className='font-sans mt-[80px] lg:mt-[128px]'>{children}</main>
      <Footer />
    </>
  )
}
