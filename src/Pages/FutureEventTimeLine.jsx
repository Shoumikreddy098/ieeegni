import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Step 1: Import
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import IEEE from "../assets/IEEE.png";
import computer_society from "../assets/computer_society.png";
import ieeecis from "../assets/ieeecis.jpg";
import ieeepes from "../assets/ieeepes.jpg";
import ieeesmc from "../assets/ieeesmc.jpg";
import communication_society from "../assets/communication_society.png";
import circuits_and_systems_society from "../assets/circuits_and_systems_society.png";

const events = [
  { date: "25/05/2024", title: "Virtual Vista -1.0", subtitle: "IGNITE YOUR INTELLIGENCE - Computer Society", icon: computer_society },
  { date: "13-6-2024", title: "TECH IGNITION - 1.0", subtitle: "IEEE Student Branch Inauguration", icon: IEEE },
  { date: "14/09/2024", title: "ENGINEER'S DAY", subtitle: "IEEE STUDENT BRANCH", icon: IEEE },
  { date: "28-09-2025", title: "IEEE DAY", subtitle: "Organized By - IEEE STUDENT BRANCH", icon: IEEE },
  { date: "21/11/2024", title: "HACK ARENA", subtitle: "Elevating Ideas Empowering Futures", icon: IEEE },
  { date: "21-04-2025", title: "CLOUD MASTERY BOOTCAMP", subtitle: "Elevate Your Skills - Computer Society", icon: computer_society },
  { date: "08/02/2025", title: "TECH X - THE CODING BATTLE", subtitle: "SYSTEMS MAN AND CYBERNETICS SOCIETY", icon: ieeesmc },
  { date: "14-02-2024", title: "Cyber Ninja", subtitle: "Ignite your intelligence - Computer Society", icon: computer_society },
  { date: "29/03/2025", title: "INAUGURATION OF IEEE-PES", subtitle: "By Power & Energy Society", icon: ieeepes },
  { date: "01/04/2025", title: "CyberCrack 1.0", subtitle: "By SYSTEMS MAN AND CYBERNETICS SOCIETY", icon: ieeesmc },
  { date: "22-04-2024", title: "IEEE PES Day Celebrations", subtitle: "By Power & Energy Society", icon: ieeepes },
  { date: "03/05/2025", title: "Virtual Vista 2.0", subtitle: "By Computer Society", icon: computer_society },
  { date: "13-06-2025", title: "Project Expo", subtitle: "By Power & Energy Society", icon: ieeepes },
  { date: "26/07/2025", title: "Orientation Day", subtitle: "By IEEE STUDENT BRANCH", icon: IEEE },
  { date: "15/08/2025", title: "AI Tools & Applications Webinar", subtitle: "By SYSTEMS MAN AND CYBERNETICS SOCIETY", icon: ieeesmc },
  { date: "23-8-2025", title: "TECH IGNITION - 2.0", subtitle: " By IEEE STUDENT BRANCH", icon: IEEE },
  { date: "10/09/2025", title: "CyberCrack 2.0", subtitle: "By SYSTEMS MAN AND CYBERNETICS SOCIETY", icon: ieeesmc },
  { date: "15/01/2026", title: "TechX 2.0 Innovation Challenge", subtitle: "By SYSTEMS MAN AND CYBERNETICS SOCIETY", icon: ieeesmc },
  { date: "10/03/2026", title: "TECH HORIZON 1.0", subtitle: "By SYSTEMS MAN AND CYBERNETICS SOCIETY", icon: ieeesmc },
  { date: "25/03/2026", title: "Cyber-Safe Bootcamp", subtitle: "By SYSTEMS MAN AND CYBERNETICS SOCIETY", icon: ieeesmc },
];

function FutureEventTimeLine() {
  const navigate = useNavigate(); // ✅ Step 2: useNavigate hook

  return (
    <div
      id="FutureEventTimeLine"
      className="text-white py-20 px-4 sm:px-10 bg-transparent scroll-mt-20"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-xl animate-pulse relative inline-block">
          <span className="inline-block animate-glow transition duration-300">
            🚀 Events Timeline
          </span>
        </h2>
      </div>

      <VerticalTimeline lineColor="#a855f7">
        {events.map((event, index) => {
          const [day, month, year] = event.date.split(/[/-]/);

          // ✅ Step 3: Define conditional click navigation
          const handleClick = () => {
            if (event.title.toLowerCase().includes("tech ignition")) {
              navigate("/tech");
            } else if (event.title.toLowerCase().includes("orientation")) {
              navigate("/orientation");
            }
          };

          const isClickable =
            event.title.toLowerCase().includes("tech ignition") ||
            event.title.toLowerCase().includes("orientation");

          return (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: "#000000",
                color: "#fff",
                border: "1px solid #a855f7",
                borderRadius: "16px",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)",
                transition: "all 0.3s ease-in-out",
                cursor: isClickable ? "pointer" : "default", // ✅ cursor
              }}
              contentArrowStyle={{ borderRight: "7px solid #a855f7" }}
              iconStyle={{
                background: "#9333ea",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "3px",
                boxShadow: "0 0 12px #a855f7",
              }}
              icon={
                <div className="rounded-full border-4 border-white shadow-md w-full h-full overflow-hidden transition-transform duration-300 hover:scale-110">
                  <img
                    src={event.icon}
                    alt="event icon"
                    className="object-cover w-full h-full rounded-full"
                  />
                </div>
              }
            >
              <div
                className={`relative group ${isClickable ? "hover:scale-[1.02] transition-transform duration-300" : ""}`}
                onClick={isClickable ? handleClick : undefined}
              >
                {/* Date badge */}
                <div
                  className="absolute -top-7 -right-7 px-5 py-1 text-xs font-semibold rounded-full
                  bg-gradient-to-r from-purple-700 via-pink-600 to-indigo-700
                  shadow-lg text-white ring-1 ring-white/20
                  transition-transform duration-300 group-hover:scale-110"
                  style={{
                    userSelect: "none",
                    minWidth: "72px",
                    textAlign: "center",
                  }}
                >
                  {`${day}/${month}/${year}`}
                </div>

                <div className="p-3 transform transition-transform duration-500 hover:scale-105 hover:rotate-1">
                  <h3 className="text-xl font-bold text-white">
                    {event.title}
                  </h3>
                  <h4 className="text-sm text-white mt-2 italic font-medium">
                    {event.subtitle}
                  </h4>
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default FutureEventTimeLine;
