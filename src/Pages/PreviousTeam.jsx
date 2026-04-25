import React from "react";
import { motion } from "framer-motion";

const societies = [
  {
    name: "Team 2024",
    extraTitle: "TEAM IEEE",
    members: [
      { name: "Kasireddy Chandukiran Reddy", role: "GNITC-CSM", description: "Chair" },
      { name: "Aakansha", role: "GNIT-EEE", description: "Chair" },
      { name: "Mohammed Abdul Rahman", role: "GNITC-CSE", description: "Vice Chair" },
      { name: "C Likitha Sai", role: "GNIT-ECE", description: "Vice Chair" },
      { name: "Mohammed Raziullah Riyan", role: "GNIT-AIDS", description: "Secretary" },
      { name: "Nekkanti Yashaswini", role: "GNITC-CSE", description: "Secretary" },
      { name: "Kakumai Ruthvik Reddy", role: "GNITC-CSM", description: "Treasury" },
      { name: "Azra Fatima", role: "GNIT-CSE", description: "Treasury" },
      { name: "Kevin Paul", role: "GNITC-CSM", description: "Web Master" },
      { name: "krish", role: "GNIT-CSE", description: "Web Master" },
      { name: "V. Sumidha", role: "GNITC-CSE", description: "Design" },
      { name: "Krishanu Chaudary", role: "GNITC-", description: "Design" },
      { name: "Adari Prajna", role: "GNITC-ECE", description: "Organizing Lead" },
      { name: "K. Ravi Teja", role: "GNITC-CSE", description: "Organizing Lead" },
      { name: "Mohitha Vinnakota", role: "GNITC-IT", description: "PR" },
      { name: "Shaik Mohemmad Ibraheem", role: "GNIT-CSC", description: "PR" },
      { name: "Enumula Uma Maheswari", role: "GNITC-AIDS", description: "Student Representative" },
      { name: "Somraj Tejavat", role: "GNIT-CSE", description: "Student Representative" },
      { name: "D Naga Sree Laxmi", role: "GNIT-AIDS", description: "Student Representative" },
      { name: "Bijjala Shiva Shankar", role: "GNITC-IT", description: "Publicity and Marketing" },
      { name: "Ponnam Yashwanth", role: "GNITC-CSE", description: "Publicity and Marketing" },
      { name: "Simran ", role: "GNITC-ECE", description: "Publicity and Marketing" },
      { name: "C. Jatin", role: "GNITC-CSE", description: "Social Media" },
      { name: "Enugu Karthik Reddy", role: "GNIT-CSM", description: "Social Media" },
    ],
  },
  {
    name: "CS Society",
    members: [
      { name: "Pranav Vojjala", role: "GNITC-CSE", description: "Chair" },
      { name: "G. Ajitha Reddy", role: "GNITC-CSE", description: "Vice Chair" },
      { name: "P. Shivasai Karthikeya", role: "GNITC-CSE", description: "Treasury" },
      { name: "Nalla Nikhil", role: "GNITC-CSE", description: "Secretary" },
      { name: "Nishat Virdi", role: "GNITC-CSE", description: "Webmaster" },
    ],
  },
  {
    name: "Com Soc Society",
    members: [{ name: "Imran Ali", role: "GNITC-ECE", description: "Chair" }],
  },
  {
    name: "CAS Society",
    members: [{ name: "Karthikeya", role: "GNITC-ECE", description: "Chair" }],
  },
  {
    name: "SMC Society",
    members: [
      { name: "Manzoor", role: "GNITC- CS DS", description: "Chair" },
      { name: "N Shoumik Reddy", role: "GNITC-CSC", description: "Vice Chair" },
      { name: "Jayanth", role: "GNITC-CSD", description: "Secretary" },
      { name: "Uma Santhoshi", role: "GNITC-CSD", description: "Webmaster" },
    ],
  },
  {
    name: "PEC Society",
    members: [{ name: "K. Rishi Kumar", role: "GNITC-EEE", description: "Chair" }],
  },
];

export default function PreviousTeam() {
  return (
    <div className="min-h-screen bg-transparent text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-white drop-shadow-md"
        >
          Previous Teams
        </motion.h1>

        {societies.map((society, index) => (
          <div key={index} className="mb-20">
            {/* Society Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold text-center mb-2 text-white"
            >
              {society.name}
            </motion.h2>

            {/* Optional Subtitle */}
            {society.extraTitle && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-center text-lg text-white font-medium mb-8"
              >
                {society.extraTitle}
              </motion.p>
            )}

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {society.members.map((member, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_10px_30px_rgba(0,255,255,0.3)]"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    {member.role && (
                      <p className="text-sm text-cyan-300 font-medium">{member.role}</p>
                    )}
                    <p className="text-sm text-gray-300 mt-1">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}