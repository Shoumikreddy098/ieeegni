import React from 'react';
import MemItem from "@/components/Items/MemItem";
import FacultyInfoPrimary from "@/info/facultyinfoprimary";
import FacultyInfoSecondary from "@/info/facultyinfosecondary";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function FacltyAdv() {
  const createAutoplayPlugin = () =>
    Autoplay(
      {
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: false,
      },
      (embla) => {
        embla.on('select', () => {
          const lastIndex = embla.scrollSnapList().length - 1;
          if (embla.selectedScrollSnap() === lastIndex) {
            setTimeout(() => {
              embla.scrollTo(0);
            }, 3000);
          }
        });
      }
    );

  const renderCarousel = (dataArray) => (
    <Carousel
      opts={{ align: "start", loop: false }}
      plugins={[createAutoplayPlugin()]}
    >
      <CarouselContent className="-ml-2">
        {dataArray.map((data, index) => (
          <CarouselItem
            key={index}
            className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 group"
          >
            <MemItem
              memimg={data.img}
              memname={data.name}
              memrole={data.role}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );

  return (
    <div>
      <div id="advisors">
        <div className="faclty mt-8 w-full min-h-screen overflow-hidden px-4 sm:px-6 lg:px-10 ml-1">

          {/* Heading - Faculty Coordinators */}
          <h2 className="text-white text-3xl md:text-4xl font-semibold mt-8 mb-10 text-center animated-heading">
            Faculty Coordinators
          </h2>

          {/* Carousel – Primary Faculty */}
          <div className="memcard overflow-hidden mb-16">
            {renderCarousel(FacultyInfoPrimary)}
          </div>

          {/* Heading - Faculty Advisors */}
          <h2 className="text-white text-3xl md:text-4xl font-semibold mt-8 mb-10 text-center animated-heading delay-1">
            Faculty Advisors
          </h2>

          {/* Carousel – Secondary Faculty */}
          <div className="memcard overflow-hidden mb-16">
            {renderCarousel(FacultyInfoSecondary)}
          </div>
        </div>
      </div>

      {/* CSS for heading animation and image hover */}
      <style>{`
        @keyframes fadeSlideUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animated-heading {
          animation: fadeSlideUp 0.9s ease-out forwards;
        }

        .animated-heading.delay-1 {
          animation-delay: 0.4s;
        }

        .group:hover img {
          transform: scale(1.05);
          transition: transform 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default FacltyAdv;
