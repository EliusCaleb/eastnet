import React,{useState} from "react";
import { Link, useNavigate} from "react-router-dom";

import { FaComment } from "react-icons/fa";

const Signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: formData
          
        }),
      });
      const data = await response.json();
      if (response.ok && data.status1.code===200 ) {
        console.log(response.headers.get("Authorization"));
        localStorage.setItem("token", response.headers.get("Authorization"));
        navigate('/login');
      } else if (response.ok && data.status1.code === 422) {
        setError('Invalid  email or password(7 charaters)');
        console.log('error',data.status2)
      } else {
        setError('An error occurred during registration.');
        throw new Error(`HTTP Error: ${data.status1.code}`);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('An error occurred during registration.');
    }
  };

  
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
              {error && <div className="error text-red-500 italic m-4 p-4">{error}</div>}
                <form onSubmit={handleSubmit}>
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
                        value={formData.name} 
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
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
                        value={formData.email}
                         onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
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
                        placeholder="zawdc@#42.."
                        value={formData.password} 
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                        placeholder="zawdc@#42.."
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={(e) => setFormData({ ...formData, password_confirmation: e.target.value })}
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-4">
                    <Link
                      className="text-sm text-gray-600 underline hover:text-gray-900"
                      to="/about"
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
