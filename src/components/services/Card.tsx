'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  text: string
  description: string
  icon: React.ReactNode
}

export function Card({ text, description, icon }: CardProps): JSX.Element {
  return (
    <motion.div
      className="flex h-[280px] min-w-[280px] max-w-[320px] flex-col items-center justify-between rounded-xl bg-palete-3 p-6 shadow-2xl"
      whileHover={{
        scale: 1.05,
        boxShadow: '0 4px 8px rgba(128, 78, 243, 0.3)',
      }}
      transition={{ type: 'spring', stiffness: 200 }}
    >
      <div className="flex flex-col items-center">
        <p className="animate-bounce text-5xl text-purple-500">{icon}</p>
        <p className="mt-3 px-10 text-2xl font-semibold text-palete-2">
          {text}
        </p>
        <p className="mt-8 text-center text-palete-2">{description}</p>
      </div>
    </motion.div>
  )
}
