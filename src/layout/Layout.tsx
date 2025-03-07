import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/index";
import {Toaster} from "sonner";

export default function Layout() {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Toaster/>
    </>
  );
}
