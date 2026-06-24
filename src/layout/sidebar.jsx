import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { menuItems } from "../helper/constant";

const Sidebar = ({ open, setOpen, collapsed, setCollapsed }) => {
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
            className="absolute bottom-0 hidden p-1 bg-white border border-gray-300 rounded-full -right-3 lg:flex hover:bg-gray-100"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
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
                      <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                          `
                          w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all
                          ${
                            isActive
                              ? "bg-purple-100 text-purple-600"
                              : "text-gray-600 hover:bg-gray-100"
                          }
                          ${collapsed ? "justify-center" : ""}
                        `
                        }
                      >
                        <Icon size={18} />

                        {!collapsed && <span>{item.name}</span>}
                      </NavLink>

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
    </>
  );
};

export default Sidebar;
