import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  const { currency, calculaterating } = useContext(AppContext);

  const finalPrice = (
    course.coursePrice -
    (course.discount * course.coursePrice) / 100
  ).toFixed(2);

  return (
    <Link
      to={`/course/${course._id}`}
      onClick={() => scrollTo(0, 0)}
      className="group relative overflow-hidden rounded-2xl
      bg-white/80 backdrop-blur-lg
      border border-gray-200
      shadow-md
      transition-all duration-300
      hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        <img
          src={course.courseThumbnail}
          alt={course.courseTitle}
          className="h-44 w-full object-cover
          transition-transform duration-500
          group-hover:scale-110"
        />

        {/* Discount badge */}
        {course.discount > 0 && (
          <span
            className="absolute top-3 left-3
            rounded-full bg-linear-to-r from-amber-400 to-orange-500
            px-3 py-1 text-xs font-semibold text-white shadow-lg"
          >
            {course.discount}% OFF
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 text-left">
        {/* Title */}
        <h3 className="line-clamp-2 text-base font-semibold text-gray-800">
          {course.courseTitle}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-500">By Shashi</p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-amber-600">
            {calculaterating(course)}
          </span>

          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calculaterating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt=""
                className="h-4 w-4"
              />
            ))}
          </div>

          <span className="text-sm text-gray-500">
            ({course.courseRatings.length})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-lg font-bold text-gray-900">
            {currency}
            {finalPrice}
          </p>

          {course.discount > 0 && (
            <p className="text-sm line-through text-gray-400">
              {currency}
              {course.coursePrice}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
