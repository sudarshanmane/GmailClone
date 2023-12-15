import React from "react";

const RightSideBar = () => {
  return (
    <div className="w-full flex item-center  flex-col ">
      <img
        className="self-center w-10 h-10 mt-3 mb-5"
        src="https://cdn-icons-png.flaticon.com/128/8970/8970988.png"
        alt=""
      />
      <div className="flex  items-center flex-col gap-5 h-full mt-2 w-full ">
        {[
          "https://cdn-icons-png.flaticon.com/128/5968/5968499.png",
          "https://cdn-icons-png.flaticon.com/128/1030/1030902.png",
          "https://cdn-icons-png.flaticon.com/128/10628/10628926.png",
          "https://cdn-icons-png.flaticon.com/128/3177/3177440.png",
          "https://cdn-icons-png.flaticon.com/128/748/748113.png",
        ].map((element, index) => {
          return <img className="w-7 h-7" src={element} alt="" />;
        })}
      </div>
    </div>
  );
};

export default RightSideBar;
