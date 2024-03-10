import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Overlay as OverlayStyled, Modal as ModalStyled } from '~styles-components/Modal.styled'
import { Flex } from '~styles-components/Flex'
import { Input } from '~styles-components/Input.styled'
import { useTypedDispatch, useTypedSelector } from '~/hooks/store'
import { search } from '~/store/pagination'
import Button from '~components/Button'
import { IoCloseSharp } from 'react-icons/io5'
import { colors, sizes } from '~styles-components/_variables'

interface Props {
  set_is_open: React.Dispatch<React.SetStateAction<boolean>>
}

const _variants_modal: libs.FramerMotion.Variants = {
  initial: {
    scaleY: 0.1,
    scaleX: 0.5,
  },
  animate: {
    scaleY: 1,
    scaleX: 1,
    transition: {
      scaleX: { duration: 0.3, delay: 0.3 },
      scaleY: { duration: 0.5, delay: 0.6 },
      ease: 'backOut',
      delayChildren: 3,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
}

const _variants_item: libs.FramerMotion.Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 1 } },
  exit: {},
}

export default function Modal({ set_is_open }: Props) {
  const dispatch = useTypedDispatch()
  const state = useTypedSelector((state) => state.pagination)
  const [value, set_value] = useState(state.search)

  return (
    <OverlayStyled>
      <ModalStyled
        as={motion.div}
        variants={_variants_modal}
        initial='initial'
        animate='animate'
        exit='exit'
        style={{ originX: 0.5, originY: 0.5 }}
      >
        <Button $variant='close' onClick={() => set_is_open(false)}>
          <IoCloseSharp size={25} color={colors.black} />
        </Button>
        <Wrap>
          <label>Название:</label>
          <Input
            $variant='bordered'
            value={value?.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              set_value({ ...value, name: e.target.value || undefined })
            }
          />
        </Wrap>
        <Wrap>
          <label>Цена:</label>
          <Input
            type='number'
            $variant='bordered'
            value={value?.price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              set_value({ ...value, price: e.target.value ? parseInt(e.target.value) : undefined })
            }
          />
        </Wrap>
        <Wrap>
          <label>Бренд:</label>
          <Input
            $variant='bordered'
            value={value?.brand}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              set_value({ ...value, brand: e.target.value || undefined })
            }
          />
        </Wrap>
        <Flex
          $dir='row'
          $gap={sizes.sm}
          as={motion.div}
          variants={_variants_item}
          initial='initial'
          animate='animate'
          exit='exit'
        >
          <Button
            $variant='base'
            $bg='gray'
            onClick={() => {
              dispatch(search(value))
              set_is_open(false)
            }}
          >
            фильтр
          </Button>
          <Button
            $variant='base'
            $bg='gray'
            onClick={() => {
              dispatch(search({}))
              set_is_open(false)
            }}
          >
            сброс
          </Button>
        </Flex>
      </ModalStyled>
    </OverlayStyled>
  )
}

function Wrap({ children }: React.PropsWithChildren) {
  return (
    <Flex
      $w='100%'
      $dir='column'
      $gap='5px'
      as={motion.div}
      variants={_variants_item}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {children}
    </Flex>
  )
}
