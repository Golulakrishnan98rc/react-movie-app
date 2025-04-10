import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[70vh] bg-cover bg-center relative"
      style={{
        backgroundImage: `url("https://theknockturnal.com/wp-content/uploads/2019/04/56398299_641804229580526_5462684202732355584_o.jpg")`,
      }}
    >
      <div className="text-white text-xl text-center bg-gray-900/60 p-3 w-full bottom-0 absolute ">
        Avengers Endgame
      </div>
    </div>
  );
};

export default Banner;
