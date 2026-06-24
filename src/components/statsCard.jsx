import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";

const StatsCard = ({ title, value, icon: Icon, percentage, trend }) => {
  const isUp = trend === "up";

  return (
    <div className="p-2 bg-white border border-gray-100 shadow-sm rounded-xl lg:rounded-2xl lg:p-5">
      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 lg:gap-2">
          {/* Icon */}
          <div className="flex items-center justify-center text-purple-600 rounded-full w-7 h-7 lg:w-8 lg:h-8 bg-purple-50">
            <Icon size={14} className="lg:w-[18px] lg:h-[18px]" />
          </div>

          {/* Title */}
          <h3 className="max-w-[70px] sm:max-w-[100px] lg:max-w-full text-xs lg:text-sm text-gray-600 font-medium truncate lg:whitespace-normal">
            {title}
          </h3>
        </div>

        <button>
          <MoreHorizontal size={16} className="text-gray-400" />
        </button>
      </div>

      {/* Bottom */}
      <div className="flex items-center justify-between mt-2">
        {/* Value */}
        <h2 className="text-xl font-bold text-black lg:text-2xl">{value}</h2>

        {/* Trend */}
        <div className="flex flex-col items-start mt-2 lg:items-end">
          <div
            className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] lg:text-xs
              ${isUp ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600"}
            `}
          >
            {isUp ? <TrendingUp size={10} /> : <TrendingDown size={10} />}

            {percentage}
          </div>

          <p className="text-[10px] lg:text-xs text-gray-400 mt-1">
            from last week
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
