import React from 'react'
import { motion } from 'framer-motion'
import { Grid } from '~styles-components/Grid'
import CardSkeleton from '~components/Card/Skeleton'

export default function ProductListSkeleton() {
  return (
    <Grid
      $columns='4/auto'
      $rows='auto/auto'
      as={motion.ul}
      layout
      initial={false}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {Array(16)
        .fill('_')
        .map((_, idx) => (
          <CardSkeleton key={idx} />
        ))}
    </Grid>
  )
}
