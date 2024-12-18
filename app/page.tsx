import React from 'react'
import SearchBar from '@/components/SearchBar'
import HeroCarousel from '@/components/HeroCarousel'

const Home = () => {  
  return (
    <>
      <section className='px-6 md:px-20 py-24 border-2 border-red-500'>

        <div className='flex max-xl:flex-col gap-16 '>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>Your ultimate shopping guide!</p>
            <h1 className='head-text'>Unleash the power of
              <span className='text-primary'> ShopSc0ut</span> </h1>
            <p className='mt-6'>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.</p>
            <SearchBar/>
          </div>
         <HeroCarousel/>
        </div>
      </section>
      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>
        <div className='flex flex-wrap gap-x-8 gap-y-16'>
        {['Apple iphone','Book','Sneakers'].map((product)=>(
          <div>
            {product}
          </div>
        ))}
        </div>
      </section>
    </>
  )
}

export default Home