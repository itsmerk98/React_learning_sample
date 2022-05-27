import React from 'react';
import Product from './Product';

export default function ProductList(props) {
  return (
      props.productList.map((Product,i) => {
        return <Product product={Product} key={i} />
    })
  )
}
