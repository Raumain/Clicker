import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="bg-[#28282B] h-screen">
      <Header />
      <div className="py-24 px-10">
        <Outlet />
      </div>
    </div>
  );
}
