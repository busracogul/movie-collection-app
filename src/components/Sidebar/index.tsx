import { Layout } from "antd";
import MovieCard from "../Card/MovieCardList";
import SiderSection from "./SiderSection";
import SiderContent from "./SiderContent";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Favorites from "../../pages/FavoritesPage/Favorites";

function Sidebar() {
  const location = useLocation();
  const sidebarProps: { Component?: ReactNode } = {};

  if (location.pathname === "/") {
    sidebarProps.Component = <MovieCard />;
  } else if (location.pathname === "/favorites") {
    sidebarProps.Component = <Favorites />;
  }

  return (
    <Layout>
      <SiderSection />
      <Layout>
        <SiderContent {...sidebarProps} />
      </Layout>
    </Layout>
  );
}

export default Sidebar;
