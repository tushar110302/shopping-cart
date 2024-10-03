import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';

function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  async function fetchData() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error)
    }
    setLoading(false);
  }

  useEffect(()=> {
    fetchData();
  }, [])
  return (
    <div>
      {
        loading ? 
        (
          <div className='w-full h-screen flex justify-center items-center'>
            <Spinner/>
          </div>
        ) : 
        (
          products.length === 0 ?
          (<div className="flex justify-center items-center font-bold text-3xl font-mono">No Products Found</div>):
          (
            <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {
                products.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))
              }
            </div>
          )
        )
      }
    </div>
  )
}

export default Home