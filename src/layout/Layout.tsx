import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/index";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
