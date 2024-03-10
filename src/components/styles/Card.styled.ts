import styled, { css } from 'styled-components'
import { pm, wh } from '~styles-components/_mixins'
import { colors, sizes } from '~styles-components/_variables'

interface Props {
  $w?: string
  $h?: string
  $gap?: string 
}

export const Card = styled.div<Props>(
  ({ $w = sizes.auto, $h = sizes.auto, $gap = sizes.sm }) => css`
    ${wh($w, $h)}
    border-radius: 15px;
    background: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${$gap};
    ${pm('padding', sizes.xl, sizes.md)}
  `,
)

export const SkeletonLine = styled.span`
  ${wh(sizes.auto, '30px')}
  background: ${colors.gray};
`
