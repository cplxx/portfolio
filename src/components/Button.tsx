// 'use client'

import { DetailedHTMLProps } from 'react'
import { BiRocket } from 'react-icons/bi'

interface ButtonProps
  extends DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  children: React.ReactNode
  variant?: 'PRIMARY'
}

export function Button({
  children,
  variant = 'PRIMARY',
  ...rest
}: ButtonProps) {
  let buttonColors
  switch (variant) {
    case 'PRIMARY':
      buttonColors = 'bg-purple-500  hover:bg-transparent'
      break
  }

  return (
    <button
      className={`flex items-center gap-3 rounded-lg border px-4 py-2 text-sm font-medium text-white ${buttonColors}`}
      {...rest}
    >
      <BiRocket />
      {children}
    </button>
  )
}
