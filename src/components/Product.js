import React from 'react'

export default function Product(props) {
  return (
      <div className='row'>
          <div className='col-6 mt-5'>
              <h2>{props.Product.name}</h2>
          </div>
    </div>
  )
}
