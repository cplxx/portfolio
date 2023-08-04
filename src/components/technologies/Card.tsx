'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface SkillCardProps {
  title: string
  icon: React.ReactNode
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const card = cardRef.current
      if (!card) return
      const centerX = card.offsetLeft + card.offsetWidth / 2
      const centerY = card.offsetTop + card.offsetHeight / 2
      const mouseX = e.pageX
      const mouseY = e.pageY
      const deltaX = mouseX - centerX
      const deltaY = mouseY - centerY
      const percentageX = deltaX / (card.offsetWidth / 2)
      const percentageY = deltaY / (card.offsetHeight / 2)
      const maxAngle = 25

      setRotateX(maxAngle * -percentageY)
      setRotateY(maxAngle * percentageX)
    }

    const cardElement = cardRef.current
    cardElement?.addEventListener('mousemove', onMouseMove)

    return () => {
      cardElement?.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <motion.div
      ref={cardRef}
      className="flex min-h-[120px] min-w-[120px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-palete-3 p-4 shadow-md"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
      animate={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.1 : 1,
      }}
      transition={{ duration: 0.3 }}
      style={{ perspective: '600px' }}
    >
      <motion.p className="text-6xl text-purple-500">{icon}</motion.p>
      <div>
        <h3 className="text-lg font-semibold text-palete-2">{title}</h3>
      </div>
    </motion.div>
  )
}

export default SkillCard
