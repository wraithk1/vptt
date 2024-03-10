import styled from 'styled-components'
import { motion } from 'framer-motion'
import { reset_list, wh } from '~styles-components/_mixins'
import { sizes } from '~styles-components/_variables'

export const List = styled(motion.ul)`
  ${reset_list}
  ${wh(sizes.full)}
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: auto;
  gap: ${sizes.xl};
`

export const Item = styled(motion.li)``