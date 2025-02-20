import { HeartOutlined, HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { GetProp, Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";

const items: MenuItem[] = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: (
        <a href="/" rel="noopener noreferrer">
          All Movies
        </a>
      ),
    },
    {
      key: "2",
      icon: <HeartOutlined />,
      label: (
        <a href="/favorites" rel="noopener noreferrer">
          Favorites
        </a>
      ),
    },
    {
      key: "3",
      icon: <PlusOutlined />,
      label: (
        <a href="/addMovie" rel="noopener noreferrer">
          Add Movie
        </a>
      ),
    },
  ];
  type MenuItem = GetProp<MenuProps, "items">[number];



const siderStyle: React.CSSProperties = {
  height: "100vh",
};
export default function SiderSection(){
    return(<>
    <Sider
        style={siderStyle}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          items={items}
          theme="dark"
        ></Menu>
      </Sider>
    </>);
}