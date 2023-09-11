import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";
import Navbar from "./components/Navbar";
//import StudentSidebar from "./student/StudentSidebar";
//import TeacherSidebar from "./teacher/TeacherSidebar";
function App() {
  return (
    <div className="app">
       <Navbar />
      <hr/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes> 
      {/* <TeacherSidebar/> */}
      {/* <StudentSidebar/> */}
      

      
      

      
      
    </div>
  );
}

export default App;
