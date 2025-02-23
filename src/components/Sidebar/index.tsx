import { Layout } from "antd";
import MovieCard from "../Card/MovieCardList";
import SiderSection from "./SiderSection";
import SiderContent from "./SiderContent";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Favorites from "../../pages/FavoritesPage/Favorites";
import AddMovie from "../../pages/AddMoviePage/AddMovie";

function Sidebar() {
  const location = useLocation();
  const sidebarProps: { Component?: ReactNode } = {};

  if (location.pathname === "/") {
    sidebarProps.Component = <MovieCard />;
  } else if (location.pathname === "/favorites") {
    sidebarProps.Component = <Favorites />;
  } else if (location.pathname === "/addMovie") {
    sidebarProps.Component = <AddMovie />;
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
