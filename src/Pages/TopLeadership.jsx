import React from 'react';
import MemItem from "@/components/Items/MemItem";
import leadersinfo from "@/info/leadersinfo";

function TopLeadership() {
  return (
    <div>
      <div className="min-h-screen" id="TopLeadership">
        <p>.</p>

        <div className="faclty mt-44 md:mt-8 w-full h-auto overflow-hidden">
          {/* Centered & Animated Heading */}
          <div className="w-full flex justify-center items-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white animated-heading">
              Top Leadership
            </h1>
          </div>

          {/* Cards */}
          <div className="flex m-10 flex-col md:flex-row justify-between flex-wrap">
            {leadersinfo.map((data, index) => (
              <div className="m-5 mt-10 group" key={index}>
                <MemItem
                  memimg={data.img}
                  memname={data.name}
                  memrole={data.role}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated-heading {
          animation: fadeSlideUp 0.8s ease-out forwards;
        }

        /* Hover only image inside MemItem */
        .group:hover img {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default TopLeadership;
