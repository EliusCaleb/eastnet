import React from 'react';
import { NavLink,Link } from 'react-router-dom';
// import AdminNavbar from './AdminNavbar';
import {RiDashboardLine} from 'react-icons/ri';
import {FiSettings} from 'react-icons/fi';
import {LiaTableSolid} from 'react-icons/lia';
import { FaComment } from 'react-icons/fa';
import {BsFillPeopleFill} from 'react-icons/bs';
import {MdAssignment} from 'react-icons/md'
import {AiOutlineLogout, AiOutlineLogin} from 'react-icons/ai';



const TeacherSidebar = () => {
    //const [showSidebar, setShowSidebar] = useState('-left-64');
  return (
    <div>
            {/* <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            /> */}
            <div
                className={`h-screen fixed top-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-yellow-500 w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                <Link to="/home">
                  <FaComment size={40} className="text-blue-700 text-center" />

                  <h3 className="text-lg font-bold text-purple-600">
                            EastNetDigital
                        </h3>
                </Link>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <RiDashboardLine    name="dashboard" size={35} />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/settings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <FiSettings name="settings" size={35} />
                                    Settings
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/tables"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    < LiaTableSolid name="toc" size={35} />
                                    Tables
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/assignment"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    < MdAssignment name="toc" size={35} />
                                    Assignments
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/students"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <BsFillPeopleFill name="map" size={35} />
                                    Students
                                </NavLink>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <Link
                                    to="/login"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <AiOutlineLogin name="fingerprint" size={35} />
                                    Login
                                </Link>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <Link
                                    to="/home"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <AiOutlineLogout name="list_alt" size={35} />
                                    LogOut
                                </Link>
                            </li>
                          
                        </ul>

                        
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default TeacherSidebar