import React from "react";

const Sidebar = () => {
  const inboxes = [
    {
      label: "inboxes",
      img: "https://cdn-icons-png.flaticon.com/128/3781/3781605.png",
    },
    {
      label: "starred",
      img: "https://cdn-icons-png.flaticon.com/128/1828/1828970.png",
    },
    {
      label: "snoozed",
      img: "https://cdn-icons-png.flaticon.com/128/4214/4214135.png",
    },
    {
      label: "More",
      img: "https://cdn-icons-png.flaticon.com/128/10927/10927659.png",
    },
  ];
  return (
    <div>
      <div className="flex items-center p-5">
        <img
          className="w-5 h-4 mr-4"
          src="https://cdn-icons-png.flaticon.com/128/1828/1828859.png"
          alt=""
        />
        <img
          className="w-28 h-10"
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          alt=""
        />
      </div>
      <div className="border-2 bg-sky-300 w-8/12 flex p-5 rounded-3xl ml-2">
        <img
          className="w-6 h-6 mr-5"
          src="https://cdn-icons-png.flaticon.com/128/1828/1828918.png"
          alt=""
        />
        <p> Compose</p>
      </div>
      <div className="mt-7 flex flex-col gap-3">
        {inboxes.map((element) => {
          return (
            <div className="flex w-11/12 p-1 items-center rounded-r-full">
              <img className="w-5 h-5 mr-4 ml-5" src={element.img} alt="" />
              <p>{element.label}</p>
            </div>
          );
        })}
      </div>
      <div className="flex mt-10 justify-between mx-auto w-10/12">
        <h2 className="font-medium">Labels</h2>
        <img
          className="w-6 h-6"
          src="https://cdn-icons-png.flaticon.com/128/9312/9312231.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Sidebar;
