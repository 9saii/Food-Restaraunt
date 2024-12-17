import { Menu } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import chili from '../assets/chili-pepper.png'




function Header() {
  const [header, setHeader] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    //remove event
    return () => window.removeEventListener('scroll', scrollYPos)
  })

  return (
    <header className={`sticky mx-auto top-0 z-30 bg-orange-100 border-2 border-orange-200 transition-all ${header ? 'py-4 bg-orange-100 shadow-lg ' : 'py-6'} `}>
      <div className="mx-auto max-w-7xl ">
        {/* MobileNav */}
        <div className='flex justify-between px-4 md:hidden'>
          <div href="/" className="flex items-center gap-1 text-primary">
            <img src={chili} width={30} height={30} alt='chilli' />
            <h1 className='text-xl font-bold text-red-500 '>
              Food
              <span className="font-semibold text-gray-800">Bites</span>
            </h1>
          </div>
          <div className='flex gap-8'>
            
            <button className='' onClick={() => setMobileNavOpen(prev => !prev)}>
              <Menu className='' />
            </button>
          </div>
        </div>
        {mobileNavOpen && (
        <ul 
        onClick={()=> setMobileNavOpen(false)}
        className='flex flex-col gap-2 p-4 mt-2 text-xl font-semibold text-center bg-orange-100 rounded-lg md:hidden'>
          <li to={'/'}>Home</li>
          <li to={'#menu'}>Menu</li>
          <li to={'#about'}>About</li>
          <li to={'#contact'}>Contact</li>
         
        </ul>

        )}

        {/* computerNav */}
        <div className='items-center justify-between hidden px-10 md:flex '>
          <div href="/" className="flex items-center gap-1 font-semibold text-primary">
            <img src={chili} className='w-10'/>
            <div className='text-xl font-bold text-red-500'>
              Food
              <span className="font-semibold text-gray-800">Bites</span>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            {/* nav */}
            <ul className="flex items-center gap-8 font-semibold text-black cursor-pointer">
              <li className='transition-all hover:text-red-500' to={'/'}>Home</li>
              <li className='transition-all hover:text-red-500' to={'#menu'}>Menu</li>
              <li className='transition-all hover:text-red-500' to={'#about'}>About</li>
              <li className='transition-all hover:text-red-500' to={'#contact'}>Contact</li>
              <button className='px-4 py-2 text-white bg-red-500 rounded-lg'>Order Now</button>
            </ul>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header
