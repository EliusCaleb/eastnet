import React from "react";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

const Signup = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div
          className={`xl:max-w-[1280px] w-full`}
          style={{
            backgroundImage: `url(${"../images/signup.jpg"})`,
            backgroundSize: "cover",
          }}
        >
          <div className="mt-3">
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50"   style={{  backgroundImage: `url(${"../images/signup.jpg"})`, backgroundSize: "cover",
          }}>
              <div className="align-center text-center">
                <Link to="/home">
                  <FaComment size={40} className="text-blue-700 text-center" />

                  {/* <h3 className="text-lg font-bold text-purple-600">
                            EastNetDigital
                        </h3> */}
                </Link>
              </div>
              <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <form>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 undefined"
                    >
                      Name
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="text"
                        name="name"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        placeholder="Caleb.."
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 undefined"
                    >
                      Email
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="email"
                        name="email"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 undefined"
                    >
                      Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <label
                      htmlFor="password_confirmation"
                      className="block text-sm font-medium text-gray-700 undefined"
                    >
                      Confirm Password
                    </label>
                    <div className="flex flex-col items-start">
                      <input
                        type="password"
                        name="password_confirmation"
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-4">
                    <Link
                      className="text-sm text-gray-600 underline hover:text-gray-900"
                      to="/login"
                    >
                      Already registered?
                    </Link>
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-blue-500 hover:bg-blue-700   rounded mt-2 md:mt-0"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
