import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [logoVisible, setLogoVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const timeout = setTimeout(() => setLogoVisible(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (target) => {
    if (isHome) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${target}`);
    }
    setIsOpen(false);
  };

  const navItem = (label, target, index = 0, isMobile = false) => {
    const baseClass = "text-sm font-medium cursor-pointer transition duration-300";
    const hoverClass = "hover:text-cyan-400 hover:scale-105";

    if (isMobile) {
      return (
        <span
          key={label}
          onClick={() => handleNavClick(target)}
          className={`${baseClass} text-center text-slate-200 opacity-0 animate-fadeInUp`}
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {label}
        </span>
      );
    }

    // Desktop nav items with slide up + bounce animation & staggered delay
    return (
      <span
        key={label}
        onClick={() => handleNavClick(target)}
        className={`${baseClass} text-slate-200 nav-desktop-item ${hoverClass}`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        {label}
      </span>
    );
  };

  return (
    <div className="fixed top-0 w-full z-50 bg-transparent border-b border-gray-700 shadow-md transition-colors duration-500">
      <style>{`
        @keyframes slideUpBounce {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 1;
            transform: translateY(-10px);
          }
          80% {
            transform: translateY(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .nav-desktop-item {
          opacity: 0;
          animation-name: slideUpBounce;
          animation-duration: 600ms;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
          display: inline-block;
        }
        .nav-desktop-item:hover {
          transform: scale(1.1);
          transition: transform 0.3s ease;
        }
      `}</style>

      <div className="flex items-center justify-between px-4 py-2 md:px-10 md:h-20">
        {/* Logo */}
        <div
          className={`flex items-center transition-all duration-700 ease-out ${
            logoVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <span onClick={() => handleNavClick("home")}>
            <img
              src={logo}
              alt="Gnitc"
              className="h-14 md:h-20 w-auto rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-110 hover:rotate-1"
            />
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 font-medium items-center">
          {navItem("About Us", "aboutus", 0)}
          {navItem("Societies", "societies", 1)}
          {navItem("Events", "events", 2)}
          <RouterLink
            to="/events"
            className="cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300"
          >
            Explore Events
          </RouterLink>
          {navItem("Top Leadership", "TopLeadership", 3)}
          {navItem("Faculty Advisors", "advisors", 4)}
          {navItem("Our Team", "team", 5)}
          {navItem("Contact", "contact", 6)}
          <RouterLink
            to="/PreviousTeam"
            className="cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300"
          >
            Previous Team
          </RouterLink>
          <a
            href="https://hackarena.ieeegnitc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300"
          >
            HackArena
          </a>
          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-slate-200 hover:text-cyan-400 transition-all duration-300"
          >
            IEEE.org
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center text-white">
          <button onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-500"
          onClick={closeMenu}
        />
      )}

      <div
        className={`md:hidden fixed top-[70px] left-1/2 -translate-x-1/2 w-[90%] rounded-xl overflow-hidden transform transition-all duration-500 z-50 shadow-lg ${
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-5 pointer-events-none"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(30,41,59,0.95), rgba(15,23,42,0.95))",
        }}
      >
        <div className="relative flex flex-col items-center text-slate-200 text-sm font-medium py-4 space-y-4">
          {navItem("About Us", "aboutus", 0, true)}
          {navItem("Societies", "societies", 1, true)}
          {navItem("Events", "events", 2, true)}
          <RouterLink
            to="/events"
            onClick={closeMenu}
            className="text-center text-sm font-medium hover:text-cyan-400 transition duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `350ms` }}
          >
            Explore Events
          </RouterLink>
          {navItem("Top Leadership", "topleadership", 3, true)}
          {navItem("Faculty Advisors", "advisors", 4, true)}
          {navItem("Our Team", "team", 5, true)}
          {navItem("Contact", "contact", 6, true)}
          <RouterLink
            to="/PreviousTeam"
            onClick={closeMenu}
            className="text-center text-sm font-medium hover:text-cyan-400 transition duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `700ms` }}
          >
            Previous Team
          </RouterLink>
          <a
            href="https://hackarena.ieeegnitc.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-medium hover:text-cyan-400 transition duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `800ms` }}
          >
            HackArena
          </a>
          <a
            href="https://www.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-sm font-medium hover:text-cyan-400 transition duration-300 opacity-0 animate-fadeInUp"
            style={{ animationDelay: `900ms` }}
          >
            IEEE.org
          </a>
        </div>
      </div>
    </div>
  );
}
