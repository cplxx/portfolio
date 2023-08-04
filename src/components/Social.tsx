// 'use client'

import { DetailedHTMLProps } from 'react'

interface ButtonProps
  extends DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  children: React.ReactNode
  variant?: 'PRIMARY' | 'GITHUB' | 'LINKEDIN' | 'WHATSAPP' // Enum type for variants
}

export function ButtonSocial({
  children,
  variant = 'PRIMARY',
  ...rest
}: ButtonProps) {
  let buttonColors
  switch (variant) {
    case 'PRIMARY':
      buttonColors = 'bg-purple-500 border-palete-0 hover:bg-purple-600'
      break
    case 'GITHUB':
      buttonColors = 'bg-[transparent] hover:bg-[#050708]'
      break
    case 'LINKEDIN':
      buttonColors = 'bg-[transparent] hover:bg-[#3b5998]'
      break
    case 'WHATSAPP':
      buttonColors = 'bg-[transparent] hover:bg-[#128C7E]'
      break
  }

  return (
    <button
      className={`flex items-center gap-3 rounded-lg border px-4 py-2 text-sm font-medium text-white ${buttonColors}`}
      {...rest}
    >
      {children}
    </button>
  )
}
