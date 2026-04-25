import React from "react";
import { useNavigate } from "react-router-dom";
import EventInfo, { moreInfo1, moreInfo2 } from "../info/events";
import Autoplay from "embla-carousel-autoplay";
import EventImageItem1 from "@/components/Items/EventImageItem1";
import EventImageItem2 from "@/components/Items/EventImageItem2";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CardItem from "@/components/Items/CardItem";

function Events() {
  const navigate = useNavigate();

  const handleTechIgnitionClick = () => {
    navigate("/tech");
  };

  const handleOrientationClick = () => {
    navigate("/orientation");
  };

  return (
    <div
      id="events"
      className="px-4 py-16 sm:py-20 md:py-24 backdrop-blur-xl bg-transparent text-white min-h-screen"
    >
      {/* Section Heading */}
      <div className="text-center mb-10 sm:mb-14 animate-fadeIn">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide transition-transform duration-700 animate-pulse hover:scale-110 select-none"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Events 🎉
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg text-white/75 mt-3 font-medium animate-fadeInUp max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.02em" }}
        >
          Explore our latest happenings and join the excitement!
        </p>
      </div>

      {/* Tech Ignition Full Width Banner */}
      <div
        className="w-full mb-14 rounded-3xl p-8 shadow-[0_8px_30px_rgb(128,90,213,0.6)] backdrop-blur-lg bg-gradient-to-r from-purple-700 via-pink-600 to-cyan-500
        flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.05]"
      >
        <h3
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-white tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Tech Ignition
        </h3>
        <p
          className="max-w-3xl text-white/95 text-base sm:text-lg mb-8 leading-relaxed font-semibold drop-shadow-md"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          The IEEE Student Branch – GNI proudly presents Tech Ignition, a
          technical and fun fest aimed at inspiring innovation, technical
          excellence, and creativity while fostering enjoyment and
          collaboration among students from diverse disciplines.
        </p>
        <button
          onClick={handleTechIgnitionClick}
          className="px-10 py-4 bg-white/20 border border-white/40 rounded-full text-white font-bold tracking-wider
          hover:bg-white/40 hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce active:scale-95"
          aria-label="Navigate to Tech Ignition"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          TECH-IGNITION
        </button>
      </div>

      {/* Orientation Day Banner */}
      <div
        className="w-full mb-14 rounded-3xl p-8 shadow-[0_8px_30px_rgb(6,182,212,0.6)] backdrop-blur-lg
        bg-gradient-to-r from-cyan-600 via-indigo-500 to-purple-600
        flex flex-col items-center text-center transition-transform duration-300 hover:scale-[1.05] animate-fadeInUp"
      >
        <h3
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-5 text-white tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.7)]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Orientation Day
        </h3>
        <p
          className="max-w-3xl text-white/95 text-base sm:text-lg mb-8 leading-relaxed font-semibold drop-shadow-md"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Kickstart your journey with IEEE at GNI! Orientation Day is designed to welcome new members,
          ignite curiosity, and introduce you to a world of innovation, leadership, and technology.
          Discover the community, meet the team, and take your first step into a future of limitless opportunities.
        </p>
        <button
          onClick={handleOrientationClick}
          className="px-10 py-4 bg-white/20 border border-white/40 rounded-full text-white font-bold tracking-wider
          hover:bg-white/40 hover:scale-110 transition-transform duration-300 shadow-lg animate-bounce active:scale-95"
          aria-label="Navigate to Orientation Page"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          ORIENTATION DAY
        </button>
      </div>

      {/* First Carousel + Text Section */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-start justify-center animate-slideIn">
        <div className="w-full md:w-2/5 flex justify-center">
          <div
            className="w-full border border-white/25 backdrop-blur-xl rounded-3xl p-5
            bg-gradient-to-br from-white/5 to-black/25 shadow-[0_8px_30px_rgba(255,255,255,0.05)]
            transition-all duration-400 hover:scale-[1.04]"
          >
            <Carousel
              className="w-full"
              opts={{ align: "center", loop: true }}
              plugins={[Autoplay({ delay: 3000 })]}
            >
              <CarouselContent>
                {moreInfo1.map((data, index) => (
                  <CarouselItem
                    className="basis-full px-3 flex justify-center"
                    key={index}
                  >
                    <div
                      className="rounded-3xl overflow-hidden max-h-[450px] w-full md:w-[90%]
                      transform transition-transform duration-700 hover:scale-110 animate-fadeInUp shadow-2xl"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <EventImageItem1 img={data.img} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Text Info */}
        <div
          className="w-full md:w-2/5 bg-gradient-to-br from-white/5 to-black/25 text-white rounded-3xl p-7
          shadow-[0_8px_30px_rgba(0,0,0,0.7)] backdrop-blur-lg max-h-[600px] overflow-y-auto
          transition-transform duration-400 hover:scale-[1.04]"
          style={{ WebkitOverflowScrolling: "touch", fontFamily: "'Inter', sans-serif" }}
        >
          <p className="text-sm sm:text-base leading-relaxed text-justify mb-6 font-medium tracking-wide">
            On June 5, 2024, the Valedictory Function was held, where cash prizes
            and certificates were awarded to the winners. The top prize of Rs.
            21,100 was awarded to the team from Anurag University, Telangana,
            comprising P. Karthik Rao, B. Venu Gopal, P. Sahithi Reddy, and V.
            Charitha Reddy. The second prize of Rs. 11,100 went to the team from
            Rajalakshmi Engineering College, Tamil Nadu, including Shaun Orlando
            M, Shivani S. R., and Sarathi. The third prize of Rs. 5,500 was given
            to the team from Acropolis Institute of Technology and Research,
            Madhya Pradesh.
          </p>
          <h3 className="font-bold text-xl mb-3 tracking-wide text-white drop-shadow-md" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Distinguished Guests:
          </h3>
          <ul className="text-sm sm:text-base list-disc list-inside space-y-1 font-semibold text-white/90">
            <li><strong>Chief Guest:</strong> Dr. Krithika Sutrave</li>
            <li><strong>Guest of Honor:</strong> Dr. Mousmi Ajay Chaurasia</li>
            <li>Dr. M.A. Jabbar</li>
            <li>Mr. G. Kapil Kumar</li>
            <li>Mr. U. Arjun</li>
            <li>Dr. K. Venkata Rao</li>
            <li>Dr. Rishi Sayal</li>
            <li>Dr. Harish Kundra</li>
            <li>Dr. Geeta Tripathi</li>
            <li>Dr. Ch Ravindra</li>
            <li>Support: Sardar Gagandeep Singh Kohli, Dr. H. S. Saini</li>
          </ul>
        </div>
      </div>

      {/* Second Carousel */}
      <div className="mt-20 mb-12 animate-fadeInUp">
        <div
          className="w-full border border-white/25 backdrop-blur-xl rounded-3xl p-4
          bg-black/20 shadow-[0_8px_30px_rgba(255,255,255,0.1)]
          transition-all duration-300 hover:scale-[1.02]"
        >
          <Carousel
            className="w-full"
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent>
              {moreInfo2.map((data, index) => (
                <CarouselItem
                  className="basis-full md:basis-1/3 px-3"
                  key={index}
                >
                  <div className="rounded-2xl overflow-hidden max-h-[450px] w-full transition-transform duration-500 hover:scale-110 shadow-lg">
                    <EventImageItem2 img={data.img} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>

      {/* Card Section */}
      <div className="mt-14 animate-fadeIn">
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {EventInfo.map((eve) => (
              <CarouselItem className="m-3" key={eve.id}>
                <CardItem
                  cardImg={eve.img}
                  cardContent={eve.content}
                  cardTitlee={eve.title}
                  cardLink={eve.link}
                  registerComponent={eve.register}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex justify-between items-center mt-8">
            <CarouselPrevious className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 hover:scale-125 transition-transform shadow-lg" />
            <CarouselNext className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full p-4 hover:scale-125 transition-transform shadow-lg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Events;
