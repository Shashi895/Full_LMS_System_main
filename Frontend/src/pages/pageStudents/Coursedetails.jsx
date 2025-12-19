import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";

const Coursedetails = () => {
  const { id } = useParams();
  const [coursedata, setcoursedata] = useState(null);
  const { allCourse, calculaterating,calculatechaptertime,calculatecourseduration,calculatenooflecture
 } = useContext(AppContext);
  const fetchcoursedata = async () => {
    const findcourse = allCourse.find((course) => course._id === id);
    setcoursedata(findcourse);
  };
  useEffect(() => {
    fetchcoursedata();
  }, []);
  return coursedata ? (
    <>
      <div className=" flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 pt-20 text-left">
        <div className=" absolute top-0 left-0 w-full -z-10 from-cyan-100/70 h-[500px]"></div>

        {/* left col  */}
        <div className=" max-w-xl z-10 text-gray-500">
          <h1 className=" md:text-2xl text-sm font-semibold text-gray-800">
            {coursedata.courseTitle}
          </h1>

          <p
            className=" pt-4 text-sm "
            dangerouslySetInnerHTML={{
              __html: coursedata.courseDescription.slice(0, 200),
            }}
          ></p>

          {/* review a rating  */}
          <div className=" flex items-center space-x-2 pt-3 pb-1 text-sm">
            <p>{calculaterating(coursedata)}</p>
            <div className=" flex">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={
                    i < Math.floor(calculaterating(coursedata))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  className=" w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className=" text-blue-600">
              ({coursedata.courseRatings.length}
              {coursedata.courseRatings.length > 1 ? "ratings" : "rating"})
            </p>
            <p>{coursedata.enrolledStudents.length}{coursedata.enrolledStudents.length > 1 ? 'student': 'studens'}</p>
          </div>

          <p className=" text-sm">Course By <span className=" text-blue-600 underline">shashi</span></p>
          <div className=" pt-8 text-gray-800">
            <h2 className=" text-xl font-semibold">Course Structure</h2>
            <div className=" pt-5">
              {coursedata.courseContent.map((chapter,idx)=>(
                <div className=" border border-gray-300 bg-white mb-2 rounded" key={idx}>
                  <div className=" flex items-center justify-between px-4 py-3 cursor-pointer select-none">
                    <div className=" flex items-center gap-2">
                      <img src={assets.down_arrow_icon} alt="down arrow" />
                      <p className=" font-medium md:text-base text-sm ">{chapter.chapterTitle}</p>
                    </div>
                    <p className=" text-sm">{chapter.chapterContent.length} lectures - {calculatechaptertime(chapter)}</p>
                  </div>
                  <div className=" overflow-hidden  transition-all duration-300 max-h-96">
                    <ul className=" list-disc md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture,idx)=>(
                        <li key={idx} className=" flex items-start gap-2 py-1">
                          <img src={assets.play_icon} alt=""  className=" w-4 h-4 mt-1
                        "/>
                        <div className=" flex items-center justify-between w-full text-gray-800 text-xs md:text-default">
                          <p >{lecture.lectureTitle}</p>
                          <div className=" flex gap-2">
                            {lecture.isPreviewFree && <p className=" text-blue-500 cursor-pointer">Preview</p>}
                            <p>{humanizeDuration(lecture.lectureDuration * 60* 1000,{units:['h','m']})}</p>
                          </div>
                        </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* rigth col  */}
        <div></div>
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Coursedetails;
