import React from "react";

function CardItem2({ cardTitlee, cardImg, link }) {
  return (
    <div className="">
      <div className=" border-2 p-2 h-[280px]    rounded-xl overflow-hidden shadow-md w-72">
        <a href={link}>
        <img
          src={cardImg}
          alt="event  Image"
          className="w-72  hover:p-2  hover:rounded-2xl  h-auto rounded-xl"
        />
        </a>
        <div className="p-4">
          <h2 className="text-xl font-semibold  text-center txt">{cardTitlee}</h2>
        
        </div>
      </div>
    </div>
  );
}

export default CardItem2;
