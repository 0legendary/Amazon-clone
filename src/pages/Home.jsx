import React from 'react'
import Banner from '../components/Home/Banner'
import Products from '../components/Home/Products'

function Home() {
  return (
    <div>
      <Banner/>
      <div className='p-main'>
        <Products/>
      </div>
      
    </div>
  )
}

export default Home
