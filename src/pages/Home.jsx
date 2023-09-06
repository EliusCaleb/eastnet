import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-primary w-full overflow-hidden">
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <Navbar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
