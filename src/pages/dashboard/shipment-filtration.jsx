import { Search, CalendarDays, ChevronDown, Filter } from "lucide-react";

const ShipmentFiltration = () => {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      {/* Title */}
      <h2 className="text-lg font-semibold whitespace-nowrap">
        Shipments Data
      </h2>

      {/* Search (takes all remaining space) */}
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute text-gray-400 -translate-y-1/2 left-4 top-1/2"
        />

        <input
          type="text"
          placeholder="Search id, company, etc"
          className="w-full py-3 pr-4 text-sm border border-gray-100 outline-none pl-11 bg-gray-50 rounded-xl focus:ring-2 focus:ring-purple-200"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center w-full gap-3 lg:w-auto">
        {/* Filter */}
        <button className="flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm transition border border-gray-100 lg:flex-none bg-gray-50 rounded-xl hover:bg-gray-100">
          <Filter size={16} />
          <span>Filter</span>
          <ChevronDown size={14} />
        </button>

        {/* Date */}
        <button className="flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm transition border border-gray-100 lg:flex-none bg-gray-50 rounded-xl hover:bg-gray-100">
          <CalendarDays size={16} />
          <span>March 2025</span>
          <ChevronDown size={14} />
        </button>
      </div>
    </div>
  );
};

export default ShipmentFiltration;
