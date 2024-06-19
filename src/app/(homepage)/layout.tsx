import { ReactNode } from 'react'
import { Footer, Header } from '@/components'

type LayoutProps = {
  children?: ReactNode
}

export default function HomePageLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className={'px-3 lg:px-14'}>{children}</main>
      <Footer />
    </>
  )
}
