import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Grid } from '~components/styles/Grid'
import Card from '~components/Card'
import ProductListSkeleton from '~components/Product/ListSkeleton'
import { useGetProductsQuery, useRefetchErroredQueriesMutation } from '~/store/api'
import { Flex } from '~styles-components/Flex'
import Button from '~components/Button'
import { useTypedSelector } from '~/hooks/store'
import _ from 'lodash'
import { sizes } from '~styles-components/_variables'

export default function ProductList() {
  const state = useTypedSelector((state) => state.pagination)
  const { data, isFetching, error, isError } = useGetProductsQuery(state)
  const [refetch] = useRefetchErroredQueriesMutation()

  if (isError) {
    return (
      <Flex $dir='column' $gap={sizes.md} $justify='center' style={{ minHeight: '78vh' }}>
        <span style={{ fontSize: '3rem', color: 'red', fontWeight: 900 }}>
          Ошибка {(error as libs.rtkQuery.FetchBaseQueryError).status}
        </span>
        <Button $variant='base' onClick={() => refetch()}>
          повторить попытку
        </Button>
      </Flex>
    )
  }

  return isFetching ? (
    <ProductListSkeleton />
  ) : (
    <Grid
      $columns='4/auto'
      $rows='auto/auto'
      as={motion.ul}
      layout
      initial={false}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {_.uniqBy(data, 'id').map((product) => (
        <Card key={product.id} data={product} />
      ))}
    </Grid>
  )
}
