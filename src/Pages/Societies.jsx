import React, { useState } from 'react';
import computer_society from '../assets/computer_society.png';
import communication_society from '../assets/communication_society.png';
import circuits_and_systems_society from '../assets/circuits_and_systems_society.png';
import ieeecis from "../assets/ieeecis.jpg";
import ieeepes from "../assets/ieeepes.jpg";
import ieeesmc from "../assets/ieeesmc.jpg";
import { FaLayerGroup, FaTimes, FaExternalLinkAlt, FaUsers, FaCalendar } from 'react-icons/fa';

// SMC Modal Component
function SMCModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 p-6 flex items-center justify-between border-b border-blue-400/30">
          <div className="flex items-center gap-3">
            <img src={ieeesmc} alt="IEEE SMC" className="w-12 h-12 object-contain" />
            <h2 className="text-2xl font-bold text-white">IEEE SMC</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-200"
            aria-label="Close modal"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-xl font-semibold text-amber-400 mb-3 flex items-center gap-2">
              <FaCalendar /> About SMC
            </h3>
            <p className="text-gray-300 leading-relaxed">
              IEEE SMC GNITC is a dynamic student-led community dedicated to advancing knowledge in Artificial Intelligence, Cybernetics, and Intelligent Systems. We empower students to innovate, collaborate, and solve real-world challenges through technology and research.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
              <div className="text-amber-400 font-bold text-2xl">8+</div>
              <div className="text-gray-300 text-sm">Impactful Events</div>
            </div>
            <div className="bg-cyan-500/20 rounded-lg p-4 border border-cyan-400/30">
              <div className="text-cyan-400 font-bold text-2xl">100+</div>
              <div className="text-gray-300 text-sm">Student Members</div>
            </div>
          </div>

          {/* Faculty Advisor */}
          <div className="bg-slate-700/50 rounded-lg p-4 border border-blue-400/20">
            <h4 className="text-amber-400 font-semibold mb-2 flex items-center gap-2">
              <FaUsers /> Faculty Advisor
            </h4>
            <p className="text-white font-medium">Dr. Chatti Subbalakshmi</p>
            <p className="text-gray-400 text-sm mt-1">Guiding student mentorship and professional growth</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-semibold">Quick Links</h4>
            <a
              href="/ieeesmcwebsite-vite/index.html"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Visit Website</span>
              <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Events Preview */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
              <FaCalendar /> Featured Events
            </h4>
            <div className="space-y-2">
              <div className="bg-slate-700/30 rounded-lg p-3 border-l-4 border-amber-500 hover:bg-slate-700/50 transition-colors">
                <p className="text-white font-medium">Mentorship Programs</p>
                <p className="text-gray-400 text-sm">Connect with industry professionals</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 border-l-4 border-purple-500 hover:bg-slate-700/50 transition-colors">
                <p className="text-white font-medium">Technical Workshops</p>
                <p className="text-gray-400 text-sm">Enhance your technical skills</p>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3 border-l-4 border-cyan-500 hover:bg-slate-700/50 transition-colors">
                <p className="text-white font-medium">Networking Sessions</p>
                <p className="text-gray-400 text-sm">Build professional connections</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Societies() {
  const [smcModalOpen, setSmcModalOpen] = useState(false);
  const societies = [
    { name: 'Computer Society', img: computer_society },
    { name: 'Circuits and Systems', img: circuits_and_systems_society },
    { name: 'Communication Society', img: communication_society },
    { name: 'IEEE CIS', img: ieeecis },
    { name: 'IEEE PES', img: ieeepes },
    { name: 'IEEE SMC', img: ieeesmc },
  ];

  return (
    <div id="societies" className="px-4 py-16 md:px-20 text-white">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white relative inline-block pb-2 animate-pulse">
          <FaLayerGroup className="inline-block mr-3 mb-1 text-amber-400" />
          Our Societies
          <span
            className="block h-1 w-24 bg-gradient-to-r from-amber-400 via-blue-400 to-cyan-400 rounded-full mt-2 mx-auto"
            aria-hidden="true"
          />
        </h2>
        <p className="text-gray-300 mt-4 text-sm md:text-base font-light">
          Explore the diverse technical societies we are proud to represent.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 place-items-center">
        {societies.map((society, index) => {
          const isSMC = society.name === 'IEEE SMC';
          
          const card = (
            <div
              className={`w-72 h-72 bg-white/5 backdrop-blur-lg rounded-3xl border border-transparent shadow-lg flex flex-col items-center justify-center text-center p-6 cursor-pointer
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:shadow-[0_15px_30px_rgba(255,105,180,0.4)]
                hover:border-pink-400
                ${isSMC ? 'group relative overflow-hidden' : ''}`}
              aria-label={society.name}
              onClick={() => isSMC && setSmcModalOpen(true)}
              role={isSMC ? "button" : undefined}
            >
              {/* Animated background for SMC */}
              {isSMC && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-amber-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-amber-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
              )}
              
              <img
                src={society.img}
                alt={society.name}
                className={`w-32 h-32 object-contain rounded-full mb-5 drop-shadow-md transition-transform duration-300
                  ${isSMC ? 'group-hover:scale-110 group-hover:drop-shadow-lg' : ''}`}
                loading="lazy"
              />
              <h3 className={`text-xl font-semibold text-white tracking-wide transition-all duration-300
                ${isSMC ? 'group-hover:text-amber-400' : ''}`}>{society.name}</h3>
              
              {isSMC && (
                <div className="mt-3 text-xs text-amber-400 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to explore
                </div>
              )}
            </div>
          );

          return (
            <React.Fragment key={index}>
              {card}
            </React.Fragment>
          );
        })}
      </div>

      {/* SMC Modal */}
      <SMCModal isOpen={smcModalOpen} onClose={() => setSmcModalOpen(false)} />
    </div>
  );
}

export default Societies;
