import MemItem from "@/components/Items/MemItem";
import React from "react";
import MemInfo from "@/info/meminfo";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FacultyInfo from "@/info/facultyinfosecondary";

function Memebers() {
  return (
    <div id="members">
      <div>
        <div className=" w-full overflow-hidden">
          <div className="    border-b-4  h-screen w-full">
            <p>.</p>
            <div className=" flex justify-between items-center mt-12 gap-3">
              <div className=" heading ">Members </div>
              <div className=" flex justify-center items-center mt-1 mr-6 gap-3">
                {/* <a href="/#/members">
                  <span className=" btn1 text-white border-2 rounded-xl md:text-lg cursor-pointer l">
                    See All
                  </span>
                </a> */}
              </div>
            </div>
            <div className=" memcard flex overflow-hidden  mt-14 gap-4 ml-10 m-6">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
              >
                <CarouselContent>
                  {MemInfo.map((data,index) => {
                    return (
                      <CarouselItem
                        className=" md:basis-1/5 md:pl-4"
                        key={index}
                      >
                        <MemItem
                          memimg={data.img}
                          memname={data.name}
                          memrole={data.role}
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </div>
            
        
          </div>
        </div>
      </div>
    </div>
  );
}

export default Memebers;
