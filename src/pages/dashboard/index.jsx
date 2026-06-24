import StatsCard from "../../components/statsCard";
import { statsData } from "../../helper/constant";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-1 md:gap-3 lg:grid-cols-4">
        {statsData.map((card) => (
          <StatsCard
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
            percentage={card.percentage}
            trend={card.trend}
          />
        ))}
      </div>
      <div className="p-4 bg-white border border-gray-100 shadow-sm rounded-xl lg:rounded-2xl lg:p-5">
        <h2 className="text-lg font-bold text-black">Summary</h2>
        <p className="text-gray-600">
          This is a simple summary of the dashboard content.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
