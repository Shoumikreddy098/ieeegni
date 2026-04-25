import React from 'react';
import { FaRegLightbulb, FaUsers } from 'react-icons/fa';
import './../index.css';

function AboutUs() {
  const data1 =
    "IEEE is a non-profit organization and the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity. IEEE and its members inspire a global community to innovate for a better tomorrow through highly cited publications, conferences, technology standards, and professional and educational activities. IEEE is the trusted voice for engineering, computing, and technology information around the globe.";

  const data2 =
    "The IEEE Student Branch at our institution is an active technical community, supported by the institution’s leadership and faculty. It offers students opportunities to enhance their technical skills and engage in interdisciplinary learning through workshops, seminars, hackathons, and more. Guided by experienced mentors, the branch fosters research, leadership, and global networking, bridging the gap between academics and industry.";

  return (
    <div
      id="aboutus"
      className="min-h-screen px-4 py-16 md:px-20 text-white bg-transparent"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white animate-pulse drop-shadow-lg">
          <FaRegLightbulb className="inline-block mr-2 mb-1 text-yellow-300" /> About Us
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Global IEEE Mission */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-cyan-400/30 shadow-xl hover:shadow-cyan-400/40 transition-all duration-500 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-cyan-400">
            <FaUsers className="mr-2" /> Global IEEE Mission
          </h3>
          <p className="text-sm leading-relaxed text-slate-200">{data1}</p>
        </div>

        {/* Student Branch */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-blue-400/30 shadow-xl hover:shadow-blue-400/40 transition-all duration-500 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-blue-400">
            <FaUsers className="mr-2" /> Our Student Branch
          </h3>
          <p className="text-sm leading-relaxed text-slate-200">{data2}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
