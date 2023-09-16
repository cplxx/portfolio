'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion, TargetAndTransition } from 'framer-motion'
import { SiGithub, SiTemporal } from 'react-icons/si'
import { ButtonSocial } from '../Social'

interface Project {
  id: number
  src: string
  githubLink: string
  linkedinLink: string
}

const projects: Project[] = [
  {
    id: 1,
    src: '/project1.png',
    githubLink: 'https://github.com/cplxx',
    linkedinLink: 'https://arcanth.vercel.app/',
  },
  {
    id: 2,
    src: '/project2.png',
    githubLink: 'https://github.com/cplxx',
    linkedinLink: 'https://lading-page-discord.vercel.app/',
  },
  {
    id: 3,
    src: '/simplex.png',
    githubLink: 'https://github.com/cplxx',
    linkedinLink: 'https://simplex-five.vercel.app/',
  },
]

// Custom animation props type
type CustomAnimationProps = {
  initial?: { y: number }
  animate?: { y: number }
  transition?: { duration: number }
}

type IconMotionProps = CustomAnimationProps & { initial?: { y: number } }

export const CardProjects: React.FC = () => {
  const [showButtons, setShowButtons] = useState<number | null>(null)

  const listItemHoverProps: TargetAndTransition = {
    scale: 1.05,
  }

  const listItemTapProps: TargetAndTransition = {
    scale: 0.95,
  }

  const buttonMotionProps: IconMotionProps = {
    initial: { y: -10 },
    animate: { y: 0 },
    transition: { duration: 0.2 },
  }

  return (
    <ul className="flex flex-wrap items-center justify-center gap-10">
      {projects.map((project) => (
        <li key={project.id}>
          <motion.div
            className="relative flex items-center justify-center"
            whileHover={listItemHoverProps}
            whileTap={listItemTapProps}
            onMouseEnter={() => setShowButtons(project.id)}
            onMouseLeave={() => setShowButtons(null)}
          >
            <motion.div
              className="border-palette-2 relative h-64 border sm:-1/2 md:w-11/12 lg:w-full mx-1"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.src}
                alt=""
                className="h-full object-cover"
              />

              <AnimatePresence>
                {showButtons === project.id && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute bottom-0 flex w-full items-center justify-center"
                    style={{ opacity: 0.8 }}
                    transition={{ duration: 0.2, type: 'tween' }}
                  >
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div {...buttonMotionProps}>
                        <ButtonSocial variant="GITHUB">
                          <SiGithub />
                        </ButtonSocial>
                      </motion.div>
                    </motion.a>
                    <motion.a
                      href={project.linkedinLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ opacity: 1 }}
                    >
                      <motion.div {...buttonMotionProps}>
                        <ButtonSocial variant="LINKEDIN">
                          <SiTemporal />
                        </ButtonSocial>
                      </motion.div>
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </li>
      ))}
    </ul>
  )
}
