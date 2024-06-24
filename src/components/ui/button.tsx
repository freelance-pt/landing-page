import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonProps = {
  children: ReactNode
  className?: string
  type?: 'default' | 'primary'
  size?: 'sm' | 'lg'
  icon?: string
  disabled?: boolean
  onClick?: () => void
}

export const Button = ({
  children,
  className,
  type = 'default',
  size = 'sm',
  disabled,
  icon,
  onClick,
}: ButtonProps) => {
  const buttonType =
    type === 'default'
      ? 'border border-primary text-primary hover:bg-green-50'
      : 'bg-primary text-white hover:bg-green-700 active:bg-green-800'

  return (
    <button
      className={cn(
        `px-2 py-1 flex items-center justify-center rounded-md font-sm text-sm transition-colors duration-300 ${
          disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : buttonType
        } focus:outline-none`,
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {icon ? <span className='mr-2'>{icon}</span> : null}
      {children}
    </button>
  )
}
