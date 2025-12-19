import React from 'react'
import SearchBar from './SearchBar'
import Compaines from './Compaines'
import sketch from '../../assets/sketch.png'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20  px-7 md:px-0 space-y-7 text-center'>
      <h1 className='text-lg md:text-3xl relative font-bold text-white max-w-3xl mx-auto uppercase'>“Empower your future with courses crafted for your”<span className='text-blue-600'>success.</span><img  src={sketch} alt="sketch" className='md:block hidden absolute bottom-9 right-0 w-[40%]' /></h1>
      <p className='md:block hidden text-gray-300 max-w-2xl mx-auto'>We bring toghethr worls-class instructors, interactive content, and a supportive community to help you achive your personal and professional goal</p>

      <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring tohether world-class instructors to help you professinal goals.</p>
    <SearchBar/>
    

    </div>
  )
}

export default Hero