import { motion } from 'framer-motion'
import React from 'react'
import { Button as Btn } from '~styles-components/Button.styled'

interface Props {
  $variant: 'base' | 'close'
  $bg?: 'white' | 'gray'
}

export default function Button({
  $variant,
  $bg = 'white',
  onClick,
  children
}: Props & Partial<Pick<React.ButtonHTMLAttributes<Element>, 'onClick'>> & React.PropsWithChildren) {
  return (
    <Btn
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      $variant={$variant}
      $bg={$bg}
      onClick={onClick}
    >{children}</Btn>
  )
}
