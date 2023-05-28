import React from 'react'
import Banner from '../components/Home/Banner'
import Products from '../components/Home/Products'

function Home() {
  return (
    <div>
      <Banner/>
      <div className='p-main -mt-10 xl:-mt-36'>
        <Products/>
      </div>
      
    </div>
  )
}

export default Home
