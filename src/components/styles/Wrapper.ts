import styled, { css } from 'styled-components'
import { pm, wh } from '~styles-components/_mixins'
import { sizes } from '~styles-components/_variables'

interface Props {
  $w?: string
  $h?: string
  $margin?: string
  $padding?: string
}

/**
 * @param $margin - left/top/bottom/right
 * @param $padding - left/top/bottom/right
 *
 * - 10px - all
 * - 15px/30px - left, right / top, bottom
 * - 20px/10px/50px - left, right / top / bottom
 * - 3px/16px/40px/11px - left, top, bottom, right
 * 
 * @example
 * ```tsx
 * <Wrapper $padding={'15px/30px'}></Wrapper>
 * ```
 * in css: 
 * ```css
 * .example {
 *   padding-left: 15px;
 *   padding-top: 30px;
 *   padding-bottom: 30px;
 *   padding-right: 15px;
 * }
 * 
 * ```
 */
export const Wrapper = styled.div<Props>(({ $w, $h, $margin, $padding }) => {
  const _w = $w || sizes.auto
  const _h = $h || sizes.auto

  return css`
    ${wh(_w, _h)}
    ${$padding && _get_indent('padding', $padding)}
    ${$margin && _get_indent('margin', $margin)}
  `
})

function _get_indent(variant: 'padding' | 'margin', indent_value: string) {
  if (indent_value.includes('/')) {
    const [_left, _top, _bottom, _right] = indent_value.split('/')
    return css`
      ${pm(variant, _left, _top, _bottom, _right)}
    `
  } else {
    return css`
      ${pm(variant, indent_value)}
    `
  }
}
