import React, { useState } from "react";
import login from "../images/login.webp";
import { Link, useNavigate } from "react-router-dom";
import { Token } from "@mui/icons-material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/sign_in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify({ email, password }),
      });
      console.log('1',response)
      const data = await response.json();
      if (response.ok) {
        console.log(response.headers.get("Authorization"));
        console.log('1234',localStorage.getItem(Token))
        localStorage.getItem("token", response.headers.get("Authorization"));
        console.log('12',data)
        
        navigate("/about");
      } else {
        setError("Invalid email or password");
        console.log("error", error);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Login failed. Please check your credentials.");
    }
  };

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
                  <form onSubmit={handleLogin}>
                    {/* <!-- Email input --> */}
                    <label className="inline-block ">Email</label>
                    <br />
                    <input
                      type="email"
                      placeholder="email"
                      className="mb-6"
                      size="lg"
                      value={email}
                      onChange={handleEmailChange} // Add this onChange handler
                    />
                    <br />

                    {/* <!--Password input--> */}
                    <label className="inline-block ">Password</label>
                    <br />
                    <input
                      type="password"
                      placeholder="password"
                      className="mb-6"
                      size="lg"
                      value={password}
                      onChange={handlePasswordChange} // Add this onChange handler
                    />

                    {/* <!-- Login button --> */}
                    <div className="text-center lg:text-left">
                      <div>
                        <button
                          type="submit"
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

                  {error && (
                    <div className="error text-red-500 italic m-4 p-4">
                      {error}
                    </div>
                  )}
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
