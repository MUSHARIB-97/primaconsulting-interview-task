import { useEffect, useRef, useState } from "react";
import { Search, ChevronDown, Filter, X, CalendarDays } from "lucide-react";
import { statusFilters } from "../../helper/constant";

const ShipmentFiltration = ({
  search,
  onSearchChange,
  status,
  onStatusChange,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const filterRef = useRef(null);
  const monthPickerRef = useRef(null);

  const openMonthPicker = () => {
    monthPickerRef.current?.showPicker?.();
  };

  useEffect(() => {
    const close = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const activeFilter = statusFilters.find((item) => item.value === status);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <h2 className="text-lg font-semibold whitespace-nowrap">
        Shipments Data
      </h2>

      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute text-purple-500 -translate-y-1/2 left-4 top-1/2"
        />
        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search id, company, route, etc"
          className="w-full py-3 pr-10 text-sm border border-gray-100 outline-none pl-11 bg-gray-50 rounded-xl focus:ring-2 focus:ring-purple-200"
        />
        {search && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute text-gray-400 -translate-y-1/2 right-3 top-1/2 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      <div className="flex items-center w-full gap-3 lg:w-auto">
        {/* Filter */}
        <div className="relative flex-1 lg:flex-none" ref={filterRef}>
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm transition border border-gray-100 bg-gray-50 rounded-xl hover:bg-gray-100 whitespace-nowrap"
          >
            <Filter size={16} className="text-purple-500" />

            <span>{activeFilter?.value ? activeFilter.label : "Filter"}</span>

            <ChevronDown
              size={14}
              className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Filter Menu */}
          {menuOpen && (
            <div className="absolute right-0 z-30 w-full mt-2 overflow-hidden bg-white border border-gray-100 shadow-lg md:w-56 rounded-xl">
              {statusFilters.map((item) => (
                <button
                  key={item.value || "all"}
                  onClick={() => {
                    onStatusChange(item.value);
                    setMenuOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-sm text-left transition hover:bg-gray-50 ${
                    item.value === status
                      ? "bg-purple-50 text-purple-600 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Date Picker */}
        <div className="relative flex-1 lg:flex-none">
          <button
            onClick={openMonthPicker}
            className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm transition border border-gray-100 bg-gray-50 rounded-xl hover:bg-gray-100 whitespace-nowrap"
          >
            <CalendarDays size={16} className="text-purple-500" />
            <span>March 2025</span>
            <ChevronDown size={14} />

            <input
              ref={monthPickerRef}
              type="month"
              className="absolute inset-0 w-full opacity-0 pointer-events-none"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentFiltration;
