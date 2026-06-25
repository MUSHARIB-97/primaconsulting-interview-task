import { Bell, Menu, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { menuItems, profileMenu } from "../helper/constant";
import Modal from "../components/modal";

const Navbar = ({ setOpen }) => {
  const location = useLocation();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const allRoutes = menuItems.flatMap((section) => section.items);

  const activeRoute = allRoutes.find(
    (route) => route.path === location.pathname,
  );

  const handleLogout = () => {
    console.log("User logged out");
    setShowLogoutModal(false);
    setIsProfileOpen(false);
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 bg-[#f7f7f8] px-0 py-0">
      <div className="bg-white px-2.5 md:px-5 py-3.5 flex items-center justify-between shadow-sm">
        {/* Left */}
        <div className="flex items-center gap-4">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu size={22} />
          </button>

          <h1 className="text-2xl font-semibold">
            {activeRoute?.name || "Dashboard"}
          </h1>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          {/* Notification */}
          <button className="relative">
            <Bell size={20} className="text-gray-600" />
            <span className="absolute w-2 h-2 bg-red-500 rounded-full -top-1 -right-1" />
          </button>

          {/* Profile */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-3"
            >
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="object-cover w-10 h-10 rounded-full"
              />

              {/* Desktop only */}
              <div className="items-center hidden gap-4 sm:flex">
                <div>
                  <h4 className="text-sm font-medium">Dea Putri</h4>
                  <p className="text-xs text-gray-400">Manager</p>
                </div>

                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 z-50 w-56 mt-2 overflow-hidden bg-white border border-gray-100 rounded-md shadow-lg">
                {/* User info (always visible inside menu on mobile) */}
                <div className="px-4 py-3 border-b border-gray-100 sm:hidden">
                  <h4 className="text-sm font-medium">Dea Putri</h4>
                  <p className="text-xs text-gray-400">Manager</p>
                </div>

                {/* Action Items */}
                <div className="py-2">
                  {profileMenu.map((item) => {
                    const Icon = item.icon;

                    return (
                      <button
                        key={item.name}
                        onClick={() => {
                          if (item.name === "Logout") {
                            setShowLogoutModal(true);
                          } else {
                            setIsProfileOpen(false);
                          }
                        }}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left text-gray-600 transition-colors hover:bg-gray-50"
                      >
                        <Icon size={16} />
                        <span>{item.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Modal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        title="Are you sure you want to logout?"
        description="You will be logged out from your account."
        onConfirm={handleLogout}
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </header>
  );
};

export default Navbar;
