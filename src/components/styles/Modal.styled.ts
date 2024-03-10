import styled from 'styled-components'
import { pm, wh } from '~styles-components/_mixins'
import { colors, sizes } from '~styles-components/_variables'

export const Overlay = styled.div`
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  ${wh(sizes.full)}
  background: ${colors.overlay};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${sizes.md};
`

export const Modal = styled.div`
  ${wh('600px', '400px')}
  ${pm('padding', sizes.xxl, sizes.xl)}
  background: ${colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${sizes.md};
  border-radius: ${sizes.md};
  position: relative;
`