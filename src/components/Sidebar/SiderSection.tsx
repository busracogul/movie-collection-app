import { HeartOutlined, HomeOutlined } from "@ant-design/icons";
import { GetProp, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";

const items: MenuItem[] = [
  {
    key: "1",
    className: "sidebar-list-element",
    icon: <HomeOutlined style={{ fontSize: "1rem" }} />,
    label: (
      <a href="/" rel="noopener noreferrer">
        All Movies
      </a>
    ),
  },
  {
    key: "2",
    className: "sidebar-list-element",
    icon: <HeartOutlined style={{ fontSize: "1rem" }} />,
    label: (
      <a href="/favorites" rel="noopener noreferrer">
        Favorites
      </a>
    ),
  },
];
type MenuItem = GetProp<MenuProps, "items">[number];

const siderStyle: React.CSSProperties = {
  minHeight: "100dvh",
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
};
export default function SiderSection() {
  return (
    <>
      <Sider style={siderStyle} breakpoint="lg" collapsedWidth="0">
        <Menu
          mode="inline"
          items={items}
          theme="dark"
          className="menu-list"
        ></Menu>
      </Sider>
    </>
  );
}
