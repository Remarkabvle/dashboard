import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero';
import Products from '../../components/products/Products';
import axios from '../../api';
import useFetch from '../../hooks/usefetch';
const limitPerPage = 5
const Home = () => {
  const [offset, setOffset] = useState(1);
  let {data,error,loading} = useFetch(`/products?limit=${limitPerPage * offset}` ,offset)
  // const [products, setProducts] = useState(null)

  // useEffect(()=>{
  //   axios
  //     .get("/products")
  //     .then(res => setProducts(res.data.products))
  //     .catch(err => console.log(err))
  // }, [])
  return (
    <div className='home'>
      <Hero/>
      <Products data={data?.products}/>
      <button onClick={()=> setOffset(p=> p + 1)}>View More</button>
    </div>
  )
}

export default Home