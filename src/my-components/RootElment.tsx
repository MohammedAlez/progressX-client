import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";



export default function RootElement(){

    return (
        <div className="flex gap-4 p-3">
            <SideBar />
            <Outlet />
        </div>
    )
}