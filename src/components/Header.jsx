import React from "react";
import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";

const Header = () => {
  return (
    <div className="flex item-center h-full py-2 justify-between">
      <div className="w-7/12 flex item-center ">
        <Input
          className="rounded-3xl bg-slate-300"
          placeholder="Enter your username"
          prefix={<SearchOutlined className="site-form-item-icon" />}
          suffix={
            <Tooltip title="Extra information">
              <InfoCircleOutlined
                style={{
                  color: "rgba(0,0,0,.45)",
                }}
              />
            </Tooltip>
          }
        />
      </div>
      <div className="flex item-center gap-5 h-full mt-2">
        {[
          "https://cdn-icons-png.flaticon.com/128/471/471664.png",
          "https://cdn-icons-png.flaticon.com/128/2099/2099058.png",
          "https://cdn-icons-png.flaticon.com/128/5997/5997060.png",
        ].map((element, index) => {
          return <img className="w-7 h-7" src={element} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Header;
