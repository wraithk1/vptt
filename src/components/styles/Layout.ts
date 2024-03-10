import styled from 'styled-components'
import { sizes } from '~styles-components/_variables'

export const Layout = styled.div`
  display: grid;
  grid-template-areas:
    'filterT filterT filterT filterT'
    'list list list list'
    'list list list list'
    'filterB filterB filterB filterB';
  gap: ${sizes.md};
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, auto);
`

export const Layout_filterT = styled.div`
  grid-area: filterT;
  border-bottom: 2px solid #fff;
`

export const Layout_filterB = styled.div`
  grid-area: filterB;
  border-top: 2px solid #fff;
`

export const Layout_list = styled.div`
  grid-area: list;
`
