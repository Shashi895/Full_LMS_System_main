import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculaterating } = useContext(AppContext);
  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className=" border-2 border-amber-100 pb-6 overflow-hidden rounded-lg shadow-md
  hover:shadow-xl
  hover:-translate-y-2
  transition-all
  duration-300"
    >
      <img className=" w-full " src={course.courseThumbnail} alt="" />
      <div className=" p-3 text-left">
        <h3 className=" text-base font-semibold">{course.courseTitle}</h3>
        <p className=" text-gray-500">shashi</p>
        <div className=" flex items-center space-x-2">
          <p>{calculaterating(course)}</p>
          <div className=" flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calculaterating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt=""
                className=" w-3.5 h-3.5"
              />
            ))}
          </div>
          <p className=" text-gray-500">{course.courseRatings.length}</p>
        </div>
        <p className=" text-base font-semibold text-gray-800">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
