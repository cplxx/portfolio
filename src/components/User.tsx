'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TbArrowDown } from 'react-icons/tb'
import zico from '../../public/zico.jpg'
import { ButtonSocial } from './Social'
import { SiGithub, SiLinkedin, SiWhatsapp } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'

export function User() {
  const [showButtons, setShowButtons] = useState(false)

  const toggleButtons = () => {
    setShowButtons((prev) => !prev)
  }

  return (
    <div className="mt-3 flex flex-col items-start justify-start gap-3 rounded-md bg-transparent text-white">
      <div className="flex items-center justify-center gap-3">
        <Image
          src={zico}
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <p>Yan Castro</p>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className="animate-bounce cursor-pointer"
          onClick={toggleButtons}
        >
          <TbArrowDown />
        </motion.div>
      </div>
      <AnimatePresence>
        {showButtons && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex gap-2"
          >
            <a href="https://github.com/cplxx">
              <ButtonSocial variant="GITHUB">
                <SiGithub />
              </ButtonSocial>
            </a>
            <a href="https://www.linkedin.com/in/cplx/">
              <ButtonSocial variant="LINKEDIN">
                <SiLinkedin />
              </ButtonSocial>
            </a>
            <a href="https://api.whatsapp.com/send?phone=+5521970335270&text=Cheguei+pelo+seu+portfolio+%F0%9F%98%81">
              <ButtonSocial variant="WHATSAPP">
                <SiWhatsapp />
              </ButtonSocial>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
