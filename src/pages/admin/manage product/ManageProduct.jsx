import React from 'react'
import Products from '../../../components/products/Products'
import useFetch from '../../../hooks/usefetch'


function ManageProduct() {
    let {data, error, loading} = useFetch("/products")
  return (
    <div>
      <h1>ManageProduct</h1>
      <Products data={data?.products}/>
    </div>
  )
}

export default ManageProduct
