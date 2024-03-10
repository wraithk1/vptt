import React from 'react'
import { Card, SkeletonLine } from '~styles-components/Card.styled'
import { motion, cubicBezier } from 'framer-motion'
import { colors } from '~styles-components/_variables'

export default function CardSkeleton() {
  return (
    <Card as={motion.li}>
      {Array(4)
        .fill('_')
        .map((_, idx) => (
          <SkeletonLine
            key={idx}
            as={motion.span}
            initial={{ backgroundPosition: '0% 50%' }}
            animate={{ backgroundPosition: ['100% 50%', '0% 50%'] }}
            transition={{ duration: 3, ease: cubicBezier(0.25, 0.1, 0.25, 1), repeat: Infinity, type: 'tween' }}
            style={{
              backgroundSize: '250% 250%',
              backgroundImage:
                `linear-gradient(90deg, ${colors.gray} 49%, ${colors.white} 50%, ${colors.gray} 51%)`,
            }}
          />
        ))}
    </Card>
  )
}
