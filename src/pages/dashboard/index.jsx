import StatsCard from "../../components/statsCard";
import { statsData } from "../../helper/constant";
import ShipmentFiltration from "./shipment-filtration";

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
        <ShipmentFiltration />
      </div>
    </div>
  );
};

export default Dashboard;
