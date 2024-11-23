import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const navIcons = [
  {src:'/assets/icons/search.svg', alt: 'search'},
  {src:'/assets/icons/black-heart.svg', alt: 'black-heart'},
  {src:'/assets/icons/user.svg', alt: 'user'}
  
]

const Navbar = () => {
  return (
    <header className='w-full'>
        <nav className='nav'>
            <Link href='/' className='flex items-center gap-1'>
            <Image
            src='/assets/icons/logo.svg'
            width={27}
            height={27}
            />
            <p className='nav-logo'>Shop<span className='text-red-500'>Sc0ut</span></p>
            </Link>
            <div className='flex items-center gap-5'>
              {navIcons.map((icon)=>( 
                <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                width={30}
                height={30}
                />
              ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar