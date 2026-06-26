import { MoreHorizontal } from "lucide-react";
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
          <div className="w-20 h-7 rounded bg-gray-100 animate-pulse" />
        ) : (
          <p className="text-xl font-bold text-black lg:text-2xl">
            {formatNumber(value)}
          </p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;
