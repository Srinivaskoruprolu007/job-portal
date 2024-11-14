import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-5 text-center bg-gray-800 mt-10">
        Made with ❤️ By Srinivas
      </div>
    </div>
  );
};

export default AppLayout;
