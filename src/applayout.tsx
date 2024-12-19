import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex flex-col md:flex-row ">
        <Sidebar />
        <div className="absolute w-full md:relative md:w-[88%] top-[5rem]"><Outlet /></div>
        
    </div>
  );
}

export default AppLayout;
