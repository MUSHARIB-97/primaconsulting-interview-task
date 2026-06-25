import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./../layout/sidebar";
import Navbar from "./../layout/navbar";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f7f8]">
      <Sidebar
        open={open}
        setOpen={setOpen}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div
        className={`
          transition-all duration-300
          ${collapsed ? "lg:ml-20" : "lg:ml-64"}
        `}
      >
        <Navbar setOpen={setOpen} />

        {/* Dynamic page renders here */}
        <main className="m-2 md:m-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
