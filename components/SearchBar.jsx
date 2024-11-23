'use client'
import { ScrapeAndStoreProduct } from '@/lib/actions';
import React, { useState } from 'react'

const isValidAmazonUrl = (url)=>{
  try{
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname;

    if(
      hostname.includes('amazon.com')||
      hostname.includes('amazon')||
      hostname.includes('https://www.amazon.in')){
      return true
    }
  }catch(error){

  }
  return false
}

const SearchBar = () => {

  const [searchPrompt,setSearchPrompt] = useState('');
  const [isLoading,setIsLoading] = useState(false)
    const handleSubmit = async(e)=>{
      e.preventDefault();
      const isValidLink = isValidAmazonUrl(searchPrompt)
      if(!isValidLink) return alert('please enter a valid amazon URL')
      
      try{
          setIsLoading(true)

          //SCRAPE PRODUCT PAGE LOGIC HERE
          const product = await ScrapeAndStoreProduct(searchPrompt)

      }catch(error){
          console.log(error)
      }finally{
          setIsLoading(false)
      }
      

    }
  return (
    <form className='flex flex-wrap mt-12 gap-4' onSubmit={handleSubmit}
    >
        <input
        type='text'
        value={searchPrompt}
        placeholder='product link'
        className='searchbar-input'
        onChange={(e)=>setSearchPrompt(e.target.value)}
        />
        <button
         type='submit'
          className='searchbar-btn'
          disabled={searchPrompt===''}
          >
            {isLoading? 'Searching...':'Search'}
            </button>
    </form>
  )
}

export default SearchBar