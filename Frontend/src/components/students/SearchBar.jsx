import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import search from '../../assets/search.png'
const SearchBar = ({data}) => {

  const navigate=useNavigate()
  const [input, setinput] = useState(data ? data : "")

  const onsearchhandler=(e)=>{
    e.preventDefault()
    navigate('/course-list/'+input)

  }
  return (
    
      <form onSubmit={onsearchhandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded-full  ' action="">
        <img src={search} alt="search icon" className='  w-15  px-3 ' />
        <input onChange={e=> setinput(e.target.value)}  value={input}type="text" placeholder='Seach for Courses' className=' w-full h-full outline-none text-gray-500/80'/>
        <button type='submit' className='bg-blue-600 rounded-full text-white md:px-10 px-7 md:py-3 py-2 mx-1 shadow-[0_0_25px_rgba(124,58,237,0.5)] cursor-pointer hover:bg-blue-700'>Search</button>
      </form>
    
  )
}

export default SearchBar