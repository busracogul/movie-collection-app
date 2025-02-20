import { HeartOutlined, HomeOutlined, PlusOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, GetProp, MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import MovieCard from "../Card/MovieCardList";

const { Content, Footer, Sider } = Layout;

type MenuItem = GetProp<MenuProps, "items">[number];

const items: MenuItem[] = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: "All Movies",
  },
  {
    key: "2",
    icon: <HeartOutlined />,
    label: (
      <a href="https://ant.design" rel="noopener noreferrer">
        Favorites
      </a>
    ),
  },
  {
    key: "3",
    icon: <PlusOutlined />,
    label: "Add Movie",
  },
];

const siderStyle: React.CSSProperties = {
  height: "100vh",
};

function index() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        style={siderStyle}
        breakpoint="lg"
        collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          mode="inline"
          // defaultSelectedKeys={["1"]}
          items={items}
          theme="dark"
        ></Menu>
      </Sider>
      <Layout>
        
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <MovieCard />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default index;
