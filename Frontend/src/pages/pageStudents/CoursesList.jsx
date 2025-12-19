import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import SearchBar from "../../components/students/SearchBar";
import { useParams } from "react-router-dom";
import CourseCard from "../../components/students/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../components/students/Footer";

const CoursesList = () => {
  const { navigate,allCourse } = useContext(AppContext);
  const{input}=useParams()
  const[filtercourse,setfiltercourse]=useState([])

  useEffect(()=>{
if(allCourse && allCourse.length>0)
{
  const tempcourse=allCourse.slice()
  input ? setfiltercourse(tempcourse.filter(
    item=>item.courseTitle.toLowerCase().includes(input.toLowerCase())))
  :setfiltercourse(tempcourse)
}
  },[allCourse,input])
  return (
    <>
      <div className=" relative md:px-36 px-8 pt-20 text-left">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full">
          <div>
            <h1 className=" text-xl font-semibold text-gray-800">Course List</h1>
            <p className="  text-gray-500 ">
              <span
                className=" text-blue-600 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>{" "}
              / <span>Course List</span>
            </p>
          </div>
          <SearchBar data={input}/>
        </div>
        {
          input && <div className=" inline-flex items-center gap-4 px-4 py-2 border mt-8 mb-8 text-gray-600">
            <p>{input}</p>
            <img src={assets.cross_icon} alt="" className=" cursor-pointer" onClick={()=> navigate('/course-list')}/>
          </div>
        }
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-16 gap-3 px-2 md:p-0">
          {filtercourse.map((course,idx)=><CourseCard key={idx} course={course}/>)}
        </div>
      </div>

      <Footer/>
    </>
  );
};

export default CoursesList;
