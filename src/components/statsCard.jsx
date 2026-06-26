import {
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  TrendingUp,
} from "lucide-react";
import { formatNumber } from "../helper/format";

const StatsCard = ({ title, value, icon: Icon, isLoading }) => {
  return (
    <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl lg:rounded-2xl lg:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center text-purple-600 rounded-full w-7 h-7 lg:w-8 lg:h-8 bg-purple-50">
            <Icon size={16} className="lg:w-[18px] lg:h-[18px]" />
          </div>
          <h3 className="text-xs font-medium text-gray-600 lg:text-sm">
            {title}
          </h3>
        </div>

        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal size={16} />
        </button>
      </div>

      <div className="mt-3">
        {isLoading ? (
          <div className="w-20 bg-gray-100 rounded h-7 animate-pulse" />
        ) : (
          <div className="flex items-start justify-between md:items-center">
            <div>
              <p className="font-bold text-black text-md lg:text-xl">
                {formatNumber(value)}
              </p>
            </div>
            {/* trend */}
            <div className="flex flex-col items-center gap-1 lg:items-center">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-5 h-5 text-green-500 rounded-full bg-green-50">
                  {title?.includes("Pending") ? (
                    <ChevronDown size={12} />
                  ) : (
                    <ChevronUp size={12} />
                  )}
                </span>

                <p className="text-xs text-gray-400">
                  {title?.includes("Pending") ? "Down" : "Up by"}{" "}
                  <span
                    className={` ${title?.includes("Pending") ? "text-red-500 bg-red-100 px-1 py-0 rounded-full" : "text-green-500 bg-green-100 px-1 py-0 rounded-full"}`}
                  >
                    {title?.includes("Pending") ? "1.4%" : "2.9%"}
                  </span>
                </p>
              </div>
              <p className="ml-0 text-xs text-gray-400 md:ml-2">
                {title?.includes("Pending") ? "from last week" : "this week"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
