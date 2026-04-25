import React from "react";
import MemItem from "@/components/Items/MemItem";
import AllMemInfo from "@/info/allmeminfo";

import MemInfo from "@/info/meminfo";



function Allmem() {

  return (
    <div>
        <div className=" min-h-44 ">
            Meet the Team
        </div>
      <div className="flex justify-center gap-10 items-center flex-wrap ">
        {AllMemInfo.map((data) => {
          return (
            <div className="m-4 p-2">
              <MemItem
                memimg={data.img}
                memname={data.name}
                memrole={data.role}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Allmem;

