import React, { useState } from 'react'
import '~/App.css'
import { GlobalStyle } from '~styles-components/GlobalStyle'
import { Wrapper } from '~styles-components/Wrapper'
import ProductList from '~components/Product/List'
import { Input } from '~styles-components/Input.styled'
import Button from '~components/Button'
import { useTypedDispatch, useTypedSelector } from '~hooks/store'
import { next, prev, search } from '~/store/pagination'
import { Flex } from '~styles-components/Flex'
import { AnimatePresence } from 'framer-motion'
import Modal from '~components/Modal'
import { Layout, Layout_filterB, Layout_filterT, Layout_list } from '~styles-components/Layout'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'
import { IoFilter } from 'react-icons/io5'
import { colors, sizes } from '~styles-components/_variables'

export default function App() {
  const [is_open, set_is_open] = useState(false)

  return (
    <>
      <GlobalStyle />
      <AnimatePresence>
        <Wrapper $padding='100px/10px'>
          <Layout>
            <Layout_filterT>
              <_Filter_ variant='top' set_is_open={set_is_open} />
            </Layout_filterT>
            <Layout_list>
              <ProductList />
            </Layout_list>
            <Layout_filterB>
              <_Filter_ variant='bottom' set_is_open={set_is_open} />
            </Layout_filterB>
          </Layout>
        </Wrapper>
        {is_open && <Modal set_is_open={set_is_open} />}
      </AnimatePresence>
    </>
  )
}

interface _Filter_Props_ {
  variant: 'top' | 'bottom'
  set_is_open: React.Dispatch<React.SetStateAction<boolean>>
}

function _Filter_({ variant, set_is_open }: _Filter_Props_) {
  const dispatch = useTypedDispatch()

  return (
    <Wrapper $padding={variant === 'top' ? '0/0/10px/0' : '0/10px/0/0'}>
      <Flex $dir='row' $gap='60px' $justify='center'>
        <Button $variant='base' onClick={() => dispatch(prev())}>
          <IoMdArrowDropleft size={25} color={colors.black} />
        </Button>

        <Button $variant='base' onClick={() => set_is_open(true)}>
          <IoFilter size={25} color={colors.black} style={{ marginRight: sizes.xs }} />
          <span>Фильтр</span>
        </Button>

        <Button $variant='base' onClick={() => dispatch(next())}>
          <IoMdArrowDropright size={25} color={colors.black} />
        </Button>
      </Flex>
    </Wrapper>
  )
}
