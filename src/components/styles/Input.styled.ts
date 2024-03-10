import styled, { css } from 'styled-components'
import { pm, reset_btn, wh } from '~styles-components/_mixins'
import { colors, sizes } from '~styles-components/_variables'

interface Props {
  $variant?: 'bordered' | 'non-bordered'
}

export const Input = styled.input<Props>(({ $variant = 'non-bordered' }) => {
  return css`
    ${wh(sizes.full, sizes.auto)}
    ${pm('padding', sizes.md, '10px')}
    ${reset_btn}
    background: ${colors.white};
    border-radius: ${sizes.md};
    font-size: ${sizes.md};
    box-sizing: border-box;
    border: ${$variant === 'bordered' ? '1px solid ' + colors.gray : 'none'};
  `
})
