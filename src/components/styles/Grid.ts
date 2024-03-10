import styled, { css } from 'styled-components'
import { reset_list, wh } from '~styles-components/_mixins'
import _ from 'lodash'
import { sizes } from '~styles-components/_variables'


interface Props {
  $columns: string
  $rows: string
  $gap?: string
}

/**
 * @param $columns - repeat, auto or template
 * @param $rows - repeat, auto or template
 *
 * - '5/250px' - grid-template-columns(rows): repeat(5, 250px);
 * - 'auto/1fr' - grid-auto-columns(rows): 1fr;
 * - '250px 1fr 0.4fr' - grid-template-columns(rows): 250px 1fr 0.4fr;
 * 
 * @example
 * 1st example: 
 * ```tsx
 * <Grid $columns={'5/250px'} $rows={'auto/100px'}></Grid>
 * ```
 * -- in css: 
 * ```css
 * .example {
 *   display: grid;
 *   grid-template-columns: repeat(5, 250px);
 *   grid-auto-rows: 100px;
 * }
 * ```
 * 
 * 2nd example:
 * ```tsx
 * <Grid $columns={'250px 1fr 0.4fr'} $rows={'4/200px'}></Grid>
 * ```
 * -- in css: 
 * ```css
 * .example {
 *   display: grid;
 *   grid-template-columns: '250px 1fr 0.4fr';
 *   grid-template-rows: repeat(4, 200px);
 * }
 * ```
 */
export const Grid = styled.div<Props>(({ $columns, $rows, $gap = sizes.sm }) => {
  return css`
    ${wh(sizes.full)}
    ${reset_list}
    display: grid;
    gap: ${$gap};
    ${_get_grid_template('columns', $columns)}
    ${_get_grid_template('rows', $rows)}
  `
})

function _get_grid_template(variant: 'columns' | 'rows', template_value: string) {
  if (template_value.includes('/')) {
    const [_count, _value] = template_value.split('/')

    if (_count === 'auto') {
      const _prop = `grid${_.upperFirst(_count)}${_.upperFirst(variant)}`
      return css({ [_prop]: _value })
    } else {
      const _prop = `gridTemplate${_.upperFirst(variant)}`
      return css({ [_prop]: `repeat(${_count}, ${_value})` })
    }
  } else {
    const _prop = `gridTemplate${_.upperFirst(variant)}`
    return css({ [_prop]: template_value })
  }
}

