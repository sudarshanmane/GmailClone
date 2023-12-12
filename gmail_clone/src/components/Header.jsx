import React from "react";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { Input, Tooltip } from "antd";


const Header = () => {
  return (
    <div>
      <Input
        placeholder="Enter your username"
        prefix={<UserOutlined className="site-form-item-icon" />}
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
  );
};

export default Header;
