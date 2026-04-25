import React from "react";
import IEEE from "../assets/IEEE.png";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/events");
  };

  const handleScrollDown = () => {
    const target = document.querySelector("#about");
    if (target) {
      const yOffset = -80;
      const yPosition =
        target.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="h-screen w-full flex items-center justify-center relative text-white overflow-hidden font-bold"
      // Removed bg-gradient and background colors
    >
      {/* Removed Subtle Animated Rings */}

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-6 space-y-6 animate-fadeInUp">
        {/* Logo */}
        <img
          src={IEEE}
          alt="IEEE Logo"
          className="h-20 md:h-36 drop-shadow-[0_0_25px_rgba(0,255,255,0.25)] transition-transform duration-700 hover:scale-105"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-cyan-300 animate-metallicGlow drop-shadow-lg">
          IEEE GNI
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-base md:text-lg max-w-xl leading-relaxed font-medium">
          Driving <span className="text-white font-semibold">innovation</span>,{" "}
          <span className="text-white font-semibold">research</span>, and{" "}
          <span className="text-white font-semibold">future tech</span> at{" "}
          <span className="text-white font-semibold">Guru Nanak Institutions</span>.
        </p>

        {/* CTA Button */}
        <button
          onClick={handleExploreClick}
          className="mt-4 px-8 py-3 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:border-cyan-400/40 hover:shadow-cyan-400/30"
        >
          Discover What's Happening
        </button>

        {/* Scroll Indicator */}
        <div
          onClick={handleScrollDown}
          className="mt-8 animate-bounce cursor-pointer"
        >
          <ChevronDown
            size={36}
            className="text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
          />
        </div>
      </div>

      {/* Custom Animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp { animation: fadeInUp 1.2s ease-out both; }

          @keyframes metallicGlow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          .animate-metallicGlow {
            background-size: 200% auto;
            animation: metallicGlow 6s linear infinite;
          }
        `}
      </style>
    </div>
  );
}
