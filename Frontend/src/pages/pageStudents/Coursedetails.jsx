import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import Loading from "../../components/students/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/students/Footer";


const Coursedetails = () => {
  const { id } = useParams();
  const [coursedata, setcoursedata] = useState(null);
  const [opensection, setopensection] = useState({});
    const [isalreadyenrolled, setisalreadyenrolled] = useState(false);


  const { allCourse, calculaterating,calculatechaptertime,calculatecourseduration,calculatenooflecture,currency
 } = useContext(AppContext);
  const fetchcoursedata = async () => {
    const findcourse = allCourse.find((course) => course._id === id);
    setcoursedata(findcourse);
  };
  useEffect(() => {
    fetchcoursedata();
  }, []);
  const togglesection=(idx)=>{
    setopensection((prev)=>(
      {...prev,[idx]: !prev[idx]}
    ))

  }
  return coursedata ? (
  <>
    {/* Hero Background */}
    <div className="relative">
      <div className="absolute inset-0 "></div>

      {/* ✅ MOBILE PRICE CARD (TOP ONLY) */}
      <div className="block md:hidden relative max-w-7xl mx-auto px-6 pt-24">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border">
          <img
            src={coursedata.courseThumbnail}
            alt="Course Thumbnail"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <p className="text-red-500 text-sm font-medium">
              ⏰ 5 days left at this price
            </p>

            <div className="flex items-end gap-3 mt-4">
              <p className="text-3xl font-bold text-gray-900">
                {currency}
                {(
                  coursedata.coursePrice -
                  (coursedata.discount * coursedata.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="line-through text-gray-400">
                {currency}
                {coursedata.coursePrice}
              </p>
              <span className="text-green-600 font-medium">
                {coursedata.discount}% OFF
              </span>
            </div>

            <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold">
              {isalreadyenrolled ? "Already Enrolled" : "Enroll Now"}
            </button>
            <div className="mt-6"> <h4 className="font-semibold text-lg text-gray-800"> This course includes: </h4> <ul className="mt-3 space-y-2 text-sm text-gray-600"> <li>✔ Lifetime access</li> <li>✔ Hands-on projects</li> <li>✔ Downloadable resources</li> <li>✔ Certificate of completion</li> </ul> </div>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-12 md:pt-24 pb-16 grid md:grid-cols-3 gap-10">
        {/* LEFT SECTION */}
        <div className="md:col-span-2 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white">
          <h1 className="text-3xl font-bold text-white">
            {coursedata.courseTitle}
          </h1>

          <p
            className="mt-4 text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: coursedata.courseDescription.slice(0, 220),
            }}
          />

          <div className="flex flex-wrap items-center gap-3 mt-5 text-sm">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full font-medium">
              ⭐ {calculaterating(coursedata)}
            </span>
            <span className="text-white">
              {coursedata.courseRatings.length} Ratings
            </span>
            <span className="text-white">
              {coursedata.enrolledStudents.length} Students
            </span>
          </div>

          <p className="mt-4 text-sm text-white">
            Created by{" "}
            <span className="text-indigo-600 font-medium underline">
              Shashi
            </span>
          </p>

          {/* Course Content */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-white">
              Course Content
            </h2>

            <div className="mt-5 space-y-3">
              {coursedata.courseContent.map((chapter, idx) => (
                <div key={idx} className="border rounded-xl bg-white">
                  <div
                    onClick={() => togglesection(idx)}
                    className="flex justify-between items-center px-5 py-4 cursor-pointer hover:bg-gray-50"
                  >
                    <p className="font-medium text-gray-800">
                      {chapter.chapterTitle}
                    </p>
                    <span className="text-sm text-gray-500">
                      {chapter.chapterContent.length} lectures •{" "}
                      {calculatechaptertime(chapter)}
                    </span>
                  </div>

                  {opensection[idx] && (
                    <ul className="px-8 pb-4 space-y-2 text-sm">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li
                          key={i}
                          className="flex justify-between items-center"
                        >
                          <span>{lecture.lectureTitle}</span>
                          <span className="text-gray-500">
                            {humanizeDuration(
                              lecture.lectureDuration * 60 * 1000,
                              { units: ["h", "m"] }
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div className="mt-14">
            <h3 className="text-2xl font-semibold text-white">
              Course Description
            </h3>
            <div
              className="mt-4 text-gray-600"
              dangerouslySetInnerHTML={{
                __html: coursedata.courseDescription,
              }}
            />
          </div>
        </div>

        {/* ✅ DESKTOP STICKY PRICE CARD */}
        <div className="hidden md:block sticky top-24 h-fit bg-white rounded-2xl shadow-xl overflow-hidden border">
          <img
            src={coursedata.courseThumbnail}
            alt="Course Thumbnail"
            className="w-full h-48 object-cover"
          />

          <div className="p-6">
            <p className="text-red-500 text-sm font-medium">
              ⏰ 5 days left at this price
            </p>

            <div className="flex items-end gap-3 mt-4">
              <p className="text-4xl font-bold text-gray-900">
                {currency}
                {(
                  coursedata.coursePrice -
                  (coursedata.discount * coursedata.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="line-through text-gray-400">
                {currency}
                {coursedata.coursePrice}
              </p>
              <span className="text-green-600 font-medium">
                {coursedata.discount}% OFF
              </span>
            </div>

            <button className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold">
              {isalreadyenrolled ? "Already Enrolled" : "Enroll Now"}
            </button>
            <div className="mt-6"> <h4 className="font-semibold text-lg text-gray-800"> This course includes: </h4> <ul className="mt-3 space-y-2 text-sm text-gray-600"> <li>✔ Lifetime access</li> <li>✔ Hands-on projects</li> <li>✔ Downloadable resources</li> <li>✔ Certificate of completion</li> </ul> </div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </>
) : (
  <Loading />
);


};

export default Coursedetails;
