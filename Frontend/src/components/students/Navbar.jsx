import React, { use, useContext } from "react";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";
import logo from "../../assets/logo.png";
import userlogo from "../../assets/userlogo.png";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const { navigate, iseducator } = useContext(AppContext);

  return (
    <div
      className={` flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 py-1 rounded-full mx-10 mt-5  ${
        isCourseListPage ? "bg-white" : " bg-cyan-100"
      } `}
    >
      <img
        onClick={() => navigate("/")}
        src={logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />
      <div className="hidden md:flex items-center  gap-10 text-gray-500 ">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
                className="hover:cursor-pointer hover:text-gray-700"
              >
                {iseducator ? "Educator Dashboard" : "Become Educator"}{" "}
              </button>
              <Link to="/my-enrollments" className="hover:text-gray-700">
                {" "}
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
            className=" bg-blue-600 text-white px-5 py-2 rounded-full shadow-[0_0_25px_rgba(124,58,237,0.5)] cursor-pointer hover:bg-blue-700"
          >
            Create Account
          </button>
        )}

        {/* for Phone screen  */}
      </div>
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div>
          {user && (
            <>
              <button
                onClick={() => {
                  navigate("/educator");
                }}
              >
                {iseducator ? "Educator Dashboard" : "Become Educator"}{" "}
              </button>
              <Link to="/my-enrollments"> My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
            className=" cursor-pointer"
          >
            <img src={userlogo} alt="" className="w-10" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
