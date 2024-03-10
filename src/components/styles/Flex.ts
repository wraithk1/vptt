import styled, { css } from 'styled-components'
import { wh } from '~styles-components/_mixins'
import { sizes } from '~styles-components/_variables'

interface Props {
  $w?: string
  $h?: string
  $dir?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  $gap?: string
  $justify?: 'center' | 'space-between'
}

export const Flex = styled.div<Props>((props) => {
  const w = props.$w || sizes.auto
  const h = props.$h || sizes.auto

  return css`
    ${wh(w, h)}
    display: flex;
    flex-direction: ${props.$dir || 'row'};
    gap: ${props.$gap || 'none'};
    justify-content: ${props.$justify || 'none'};
    align-items: ${props.$justify ? 'center' : 'none'};
  `
})