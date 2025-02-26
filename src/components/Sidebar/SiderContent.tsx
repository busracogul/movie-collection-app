import { theme } from "antd";
import { Content } from "antd/es/layout/layout";
import { ReactNode } from "react";

interface ComponentProps {
  Component?: ReactNode;
}

export default function SiderContent({ Component }: ComponentProps) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <>
     <div style={{ backgroundColor: "rgb(4, 21, 39)" }}>
     <Content style={{ margin: "24px 16px 0" }}>
        <div
        className="bg-gray-900"
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            backgroundColor:"rgb(4,21,39)"
          }}
        >
          {Component && <div>{Component}</div>}
        </div>
      </Content>
     </div>
    </>
  );
}
