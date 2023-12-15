import { Checkbox } from "antd";
import React from "react";
import { StarOutlined } from "@ant-design/icons";

const Content = () => {
  return (
    <div>
      <div className="pt-5 flex">
        <div className="flex py-4 pl-5 pr-28 hover:bg-slate-300 w-fit border-b-4 border-blue-900">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.flaticon.com/128/482/482953.png"
            alt=""
          />{" "}
          <div className="ml-3">Primary</div>
        </div>
        <div className="flex py-4 pl-5 pr-28 hover:bg-slate-300 w-fit border-b-4 ">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.flaticon.com/128/5530/5530758.png"
            alt=""
          />
          <div className="ml-3">Primary</div>
        </div>
        <div className="flex py-4 pl-5 pr-28 hover:bg-slate-300 w-fit border-b-4 ">
          <img
            className="h-5 w-5"
            src="https://cdn-icons-png.flaticon.com/128/33/33308.png"
            alt=""
          />
          <div className="ml-3">Primary</div>
        </div>
      </div>
      {[1, 1, 1, 1, 1, 1].map((element, index) => {
        return (
          <div
            key={index}
            className="flex w-full justify-between px-2 py-3  bg-slate-200"
          >
            <div className="flex gap-2">
              <Checkbox></Checkbox>
              <StarOutlined />
              <img
                className="w-5 h-5"
                src="https://cdn-icons-png.flaticon.com/128/11519/11519985.png"
                alt=""
              />
            </div>
            <div>Mail Info</div>
            <div>15:00</div>
          </div>
        );
      })}
    </div>
  );
};

export default Content;
