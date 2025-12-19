import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {  AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {

  const {allCourse}=useContext(AppContext)

  return (
    <div className=' py-16 md:px-40 px-8 w-full'>
      <h2 className=' text-4xl font-medium text-white'>Learn from the best</h2>
      <p className='text-sm md:text-base text-gray-300 mt-3'>Discover our top rated course across various categories. From coding and design to <br />business and wellness, our courses are crafted to deliver results.</p>
      <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] px-4 md:px-0 md:my-16 my-10 gap-4'>
        {allCourse.slice(0,4).map((course,idx)=> <CourseCard key={idx} course={course}/>)}
        
      </div>
      <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
      className=' text-white border border-gray-500/30 px-10 py-3 rounded hover:bg-blue-700 shadow-[0_0_25px_rgba(124,58,237,0.5)] bg-blue-600'>Show all Courses</Link>
    </div>
  )
}

export default CoursesSection