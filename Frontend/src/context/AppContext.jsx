import { createContext, useEffect, useState } from "react";
// import { useSubmit } from "react-router-dom";
import {dummyCourses} from '../assets/assets'
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext();
export const AppContextProvider = (props) => {

  const currency=import.meta.env.VITE_CURRENCY;
  const navigate=useNavigate()
  const [allCourse,setAllCourse]=useState([])
  const [iseducator,setiseducator]=useState(true)
// fetch all course 
  const fetchAllCourses=async()=>{
     setAllCourse(dummyCourses)
  }

  // function to calculate average rating of course
  const calculaterating=(course)=>{
    if(course.courseRatings.length===0)
    {
      return 0;
    }
    let totalRating=0
    course.courseRatings.forEach(rating=>{
      totalRating +=rating.rating
    })
    return totalRating/course.courseRatings.length

  }

  // function to calcualte course time
const calculatechaptertime=(chapter)=>{
  let time =0;
  chapter.chapterContent.map((lecture)=>
    time+=lecture.lectureDuration

  )
  return humanizeDuration(time*60*1000,{units:['h','m']})
}

//function course duration 
const calculatecourseduration=(course)=>{
  let time=0;
  course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=>time+=lecture.lectureDuration))
  return humanizeDuration(time*60*1000,{units:['h','m']})

}

// totla nuber of lecture in course
const calculatenooflecture=()=>{
  let totallecture=0;
  course.courseContent.forEach(chapter=>{
    if(Array.isArray(chapter.chapterContent))
    {
      totallecture+=chapter.chapterContent.length
    }
  })
  return totallecture;
}


  useEffect(()=>{
    fetchAllCourses()
  },[])

    const value={
      currency,allCourse,navigate,calculaterating,iseducator,setiseducator,calculatechaptertime,calculatecourseduration,calculatenooflecture


    }
  return (
  <AppContext.Provider value={value}>
    {props.children}
    </AppContext.Provider>)
};
