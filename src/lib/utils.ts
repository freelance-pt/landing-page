import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatPrice = (price: number) => {
  return price.toLocaleString('vi', { style: 'currency', currency: 'VND' })
}

export const formatPriceToPercent = (oldPrice: number, newPrice: number, decimalPlaces: number = 0) => {
  const percent = ((oldPrice - newPrice) / oldPrice) * 100
  return percent.toFixed(decimalPlaces) + '%'
}
