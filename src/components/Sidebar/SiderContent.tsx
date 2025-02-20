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
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {Component && <div>{Component}</div>}
        </div>
      </Content>
    </>
  );
}
