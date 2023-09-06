import React from "react";
import Hero from "../components/Hero";

const Home = () => {
  return (
      <div className="bg-primary w-full overflow-hidden">
        <div className={`sm:px-16 px-6 flex justify-center items-center`}>
          <div className={`xl:max-w-[1280px] w-full`}>
            <div className="mt-3">
              <Hero/>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Home;
