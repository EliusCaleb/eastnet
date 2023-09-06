import React from "react";
import { Link } from "react-router-dom";
import homepageimage from "../images/Homepage.jpg";

const Hero = () => {
  return (
   
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-yellow-600 text-4xl font-bold text-center mt-6">
            Achieve Mastery Through Challenge
          </h1>
          <p className="text-2xl text-center py-6  italic mt-4">
            Improve your development skills by training with your peers on
            assessments that include code kata, quizzes, and prose that
            continuously challenge and push your coding practice
          </p>

          <div className="flex flex-col md:flex-row justify-between items-center mt-6">
            <div className="mt-4 md:mt-0 md:mr-4">
              <h1 className="text-center">Teachers</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0">
                <Link to="#login">Login</Link>
              </button>
            </div>

            <div className="mt-4 md:mt-0">
              <h1 className="text-center">Students</h1>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 md:mt-0">
                <Link to="#login">Login</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <img src={homepageimage} alt="/" className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
