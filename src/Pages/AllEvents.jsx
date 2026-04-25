import React from "react";
import { CalendarDays, MapPin, ArrowRight, Info } from "lucide-react";
import techImg from "../assets/tech.jpg";
import { Link } from "react-router-dom";
import orientation from "../assets/orientation.jpg";
const futureEvents = [

  {
    id: 1,
    title: "TECH-IGNITION 2.0",
    date: "23 August 2025",
    location: "Guru Gobind Singh Auditorium - GNI",
    description:
      "Join us for Tech-Ignition 2.0 – a day packed with innovation, skill, and creativity! Compete in UI/UX Design, Code Debugging, Tech-Treasure Hunt, Debate, E-Sports (BGMI & Free Fire), and The Content Creator’s Challenge. Free entry for IEEE members!",
    tag: "Tech & Fun",
    img: techImg,
    registrationLink: "https://konfhub.com/tech-ignition-20-c7a586ae",
    detailsPage: "/tech",
  },
    {
    id: 2,
    title: "IEEE ORIENTATION DAY",
    date: "26 July 2025",
    location: "Ratan Naval Tata AUDITORIUM- GNI",
    description:
      "The IEEE GNI Orientation Day is a welcoming event for new students, offering an introduction to the IEEE Student Branch’s vision, mission, and opportunities. It’s a chance to meet the team, discover upcoming events, explore various technical domains!",
    tag: "Kickstart Your IEEE Journey",
    img: orientation,
    registrationLink: "https://konfhub.com/EXPIRED",
    detailsPage: "/orientation",
  },
];

export default function Events() {
  return (
    <div className="relative min-h-screen px-4 md:px-8 pt-28 pb-20 bg-black text-white flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-16 animate-fadeIn max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 animate-gradient">
          🚀 Upcoming IEEE Events
        </h1>
        <p className="text-gray-300 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
          Stay tuned for our exciting lineup of tech events. Mark your calendars and be part of the innovation!
        </p>
      </div>

      {/* Events Grid */}
      <div
        className={`grid gap-12 justify-center ${
          futureEvents.length === 1
            ? "grid-cols-1"
            : "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {futureEvents.map((event, index) => (
          <div
            key={event.id}
            className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 border border-transparent hover:border-gradient-to-r hover:border-pink-500 hover:via-purple-600 hover:to-cyan-500 shadow-xl hover:shadow-[0_0_25px_#a855f7] transform transition-all duration-500 hover:scale-[1.07] animate-fadeInUp max-w-md"
            style={{ animationDelay: `${index * 0.25}s` }}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden rounded-t-3xl shadow-lg">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none rounded-t-3xl"></div>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 pt-4 bg-black/60 backdrop-blur-md rounded-b-3xl flex flex-col justify-between min-h-[320px]">
              {/* Tag */}
              <span className="inline-flex items-center justify-center mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-[10px] md:text-xs font-semibold px-2 py-[2px] rounded-full select-none">
                {event.tag}
              </span>

              <div className="flex-grow">
                <h3 className="text-2xl font-extrabold mb-3 group-hover:text-gradientPinkPurple transition-colors duration-400">
                  {event.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Date & Location */}
                <div className="space-y-3 text-sm md:text-base mb-8">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-pink-400 cursor-default transition-colors duration-300">
                    <CalendarDays size={18} className="text-pink-400" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-400 hover:text-purple-500 cursor-default transition-colors duration-300">
                    <MapPin size={18} className="text-purple-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <a
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-6 bg-gradient-to-r from-pink-600 via-purple-700 to-cyan-600 rounded-full font-extrabold text-white shadow-[0_0_15px_rgba(219,39,119,0.7)] hover:shadow-[0_0_25px_rgba(139,92,246,0.9)] transition-shadow duration-700 animate-glowPulse"
              >
                Register Now <ArrowRight size={20} />
              </a>

              <Link
                to={event.detailsPage}
                className="flex items-center justify-center gap-2 w-full py-3 px-6 mt-4 rounded-full font-semibold text-gray-200 transition-colors duration-300 bg-gradient-to-r from-gray-700 to-gray-600 hover:text-white hover:shadow-[0_0_20px_rgba(219,39,119,0.8)] hover:bg-gradient-to-r hover:from-pink-600 hover:via-purple-700 hover:to-cyan-600 hover:font-extrabold hover:animate-glowPulse"
              >
                {event.title} <Info size={20} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 5s ease infinite;
        }

        @keyframes glowPulse {
          0%, 100% {
            box-shadow: 0 0 6px 2px rgba(219, 39, 119, 0.6);
          }
          50% {
            box-shadow: 0 0 15px 6px rgba(219, 39, 119, 0.9);
          }
        }
        .animate-glowPulse {
          animation: glowPulse 3s ease-in-out infinite;
        }

        .text-gradientPinkPurple {
          background: linear-gradient(90deg, #ec4899, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
    </div>
  );
}
