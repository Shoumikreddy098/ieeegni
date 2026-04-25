import React, { useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import MemItem from '@/components/Items/MemItem';
import TeamInfoGNITC from '@/info/teaminfognitc';
import TeamInfoGNIT from '@/info/teaminfognit';

function Team() {
  const [selectedTeam, setSelectedTeam] = useState('GNITC');

  const plugin = useRef(
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
    )
  );

  const renderCarousel = (dataArray) => (
    <Carousel
      key={selectedTeam} // This ensures carousel resets when team changes
      opts={{ align: 'start', loop: false }}
      plugins={[plugin.current]}
    >
      <CarouselContent className="-ml-2">
        {dataArray.map((data, index) => (
          <CarouselItem
            key={index}
            className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
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
    <div id="team" className="w-full min-h-screen px-4 sm:px-6 lg:px-10 pb-10 pt-4">
      {/* Toggle Buttons */}
      <div className="flex gap-4 justify-center pt-6 mb-10">
        {['GNITC', 'GNIT'].map((team) => (
          <button
            key={team}
            onClick={() => setSelectedTeam(team)}
            className={`px-6 py-2 rounded-xl font-semibold border border-white/20 transition-all duration-300 ${
              selectedTeam === team
                ? 'bg-white/10 text-white scale-105'
                : 'bg-white/5 text-white hover:bg-white/10'
            }`}
          >
            {team}
          </button>
        ))}
      </div>

      {/* Team Section Heading */}
      <div className="flex justify-center mb-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold tracking-wide animate-pulse">
          TEAM - {selectedTeam}
        </h2>
      </div>

      {/* Carousel */}
      <div className="memcard overflow-hidden mb-8 mt-4 px-1">
        {selectedTeam === 'GNITC'
          ? renderCarousel(TeamInfoGNITC)
          : renderCarousel(TeamInfoGNIT)}
      </div>
    </div>
  );
}

export default Team;
