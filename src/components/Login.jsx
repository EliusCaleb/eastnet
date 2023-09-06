import React from "react";
import login from "../images/login.webp";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`sm:px-16 px-6 flex justify-center items-center`}>
        <div className={`xl:max-w-[1280px] w-full`}>
          <section className="h-screen">
            <div className="h-full">
              <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                  <img src={login} className="w-full" alt="/" />
                </div>
                <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                  <form>
                    {/* <!-- Email input --> */}
                    <label
                    className="inline-block "
                  >
                    Email
                  </label>
                  <br/>
                    <input
                      type="email"
                      label="Email address"
                      size="lg"
                      placeholder="email"
                      className="mb-6"
                    />
                    <br />

                    {/* <!--Password input--> */}
                    <label
                    className="inline-block "
                    
                  >
                    Password
                  </label>
                  <br/>
                    <input
                      type="password"
                      label="Password"
                      placeholder="password"
                      className="mb-6"
                      size="lg"
                    />

                    {/* <!-- Login button --> */}
                    <div className="text-center lg:text-left">
                      <div rippleColor="light">
                        <button
                          type="button"
                          className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white  bg-blue-500 hover:bg-blue-700    mt-2 md:mt-0"
                        >
                          Login
                        </button>
                      </div>

                      {/* <!-- Register link --> */}
                      <p className="mb-0 mt-2 pt-1 text-sm  italic">
                        Don't have an account?{" "}
                        <Link
                          to="/signup"
                          className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 "
                        >
                          Register
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
