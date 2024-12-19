import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex flex-col md:flex-row ">
        <Sidebar />
        <Outlet />
    </div>
  );
}

export default AppLayout;
