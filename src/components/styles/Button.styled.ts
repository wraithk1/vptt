import styled, { css } from 'styled-components'
import { pm, reset_btn, wh } from '~styles-components/_mixins'
import { colors, sizes } from '~styles-components/_variables'

interface Props {
  $variant: 'base' | 'close'
  $bg?: 'white' | 'gray'
}

export const Button = styled.button<Props>(({ $variant, $bg }) => {
  let _STYLES_

  switch ($variant) {
    case 'base':
      _STYLES_ = css`
        background: ${$bg === 'white' ? colors.white : colors.gray};
        ${pm('padding', '20px')}
        border-radius: ${sizes.md};
        font-weight: 700;
        text-transform: uppercase;
      `
      break

    case 'close':
      _STYLES_ = css`
        background: transparent;
        ${pm('padding', '5px')}
        position: absolute;
        top: 10px;
        right: 10px;
      `
      break
  }

  return css`
    ${_STYLES_}
    ${reset_btn}
    display: flex;
    justify-content: center;
    align-items: center;
  `
})