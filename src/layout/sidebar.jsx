import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { menuItems } from "../helper/constant";
import { useState } from "react";
import Modal from "../components/modal";

const Sidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    console.log("User logged out");
    setShowLogoutModal(false);
  };
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen bg-white border-r border-gray-200
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="relative flex items-center justify-between px-4 py-5">
          <img
            src={logo}
            alt="Logo"
            className={`h-12 transition-all duration-300 ${
              collapsed ? "w-10" : "w-auto"
            }`}
          />

          <button className="lg:hidden" onClick={() => setOpen(false)}>
            <X size={20} />
          </button>

          <button
            className="absolute hidden p-1 bg-white border border-purple-300 rounded-full -bottom-8 -right-3 lg:flex hover:bg-purple-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? (
              <ChevronRight size={16} color="purple" />
            ) : (
              <ChevronLeft size={16} color="purple" />
            )}
          </button>
        </div>

        {/* Menu */}
        <div className="p-3 space-y-8">
          {menuItems.map((section) => (
            <div key={section.title}>
              {!collapsed && (
                <p className="px-3 mb-3 text-xs font-medium text-gray-400">
                  {section.title}
                </p>
              )}

              <div className="space-y-2">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.name} className="relative group">
                      {item.action === "logout" ? (
                        <button
                          onClick={() => setShowLogoutModal(true)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all text-red-600 hover:bg-red-100 ${collapsed ? "justify-center" : ""}`}
                        >
                          <Icon size={18} />
                          {!collapsed && <span>{item.name}</span>}
                        </button>
                      ) : (
                        <NavLink
                          to={item.path}
                          className={({ isActive }) =>
                            `w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${isActive ? "bg-purple-100 text-purple-600" : "text-gray-600 hover:bg-gray-100"} ${collapsed ? "justify-center" : ""}`
                          }
                        >
                          <Icon size={18} />
                          {!collapsed && <span>{item.name}</span>}
                        </NavLink>
                      )}

                      {/* Tooltip */}
                      {collapsed && (
                        <span className="absolute px-2 py-1 text-xs text-white transition-all scale-0 -translate-y-1/2 bg-gray-900 rounded-md left-16 top-1/2 group-hover:scale-100 whitespace-nowrap">
                          {item.name}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </aside>
      <Modal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        title="Are you sure you want to logout?"
        description="You will be logged out from your account."
        onConfirm={handleLogout}
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </>
  );
};

export default Sidebar;
