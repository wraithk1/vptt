import { css } from 'styled-components'
import { colors } from '~styles-components/_variables'

export const wh = (w: string, h: string = w) => css`
  width: ${w};
  height: ${h};
`

export const pm = (
  is: 'padding' | 'margin',
  left: string,
  top: string = left,
  bottom: string = top,
  right: string = left,
) => css`
  ${is}-left: ${left};
  ${is}-top: ${top};
  ${is}-bottom: ${bottom};
  ${is}-right: ${right};
`

export const reset_list = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const reset_btn = css`
  border: none;
  outline: none;
`

export const scrollbar = (w: string, thumb = colors.scrollbar, track = 'none') => css`
  &::-webkit-scrollbar {
    width: ${w};
  }
  &::-webkit-scrollbar-track {
    background-color: ${track};
    border-radius: ${w};
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${thumb};
    border-radius: ${w};
  }
`