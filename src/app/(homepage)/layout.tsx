import { ReactNode } from 'react'
import { Footer, Header } from '@/components'

type LayoutProps = {
  children?: ReactNode
}

export default function HomePageLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className='font-sans'>{children}</main>
      <Footer />
    </>
  )
}
