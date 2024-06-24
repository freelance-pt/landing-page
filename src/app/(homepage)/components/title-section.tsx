import { Divider } from '@/components/ui'

export const TitleSection = ({ title, label }: { title: string; label?: string }) => {
  return (
    <div className='w-full text-center my-3 lg:my-6'>
      <h2 className='font-curs text-primary mb-3 text-2xl lg:text-4xl'>{title}</h2>
      {label ? (
        <p className='text-neutral-900 w-full md:w-[80%] lg:w-[54%] mx-auto text-sm lg:text-base mb-4'>{label}</p>
      ) : null}
      <Divider />
    </div>
  )
}
