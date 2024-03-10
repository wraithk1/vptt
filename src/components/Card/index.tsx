import React from 'react'
import { Card as CardStyled } from '~/components/styles/Card.styled'
import { motion } from 'framer-motion'
import _ from 'lodash'


interface Props {
  data: Partial<vptt.entities.Product>
}

export default function Card({ data: { id, name, price, brand } }: Props) {
  return (
    <CardStyled
      as={motion.li}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: _.random(0, 1.5) }}
    >
      <span>id: {id}</span>
      <span>name: {name}</span>
      <span>price: {price}</span>
      <span>brand: {brand}</span>
    </CardStyled>
  )
}
