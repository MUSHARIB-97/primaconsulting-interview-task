import { useState } from "react";
import { AlertTriangle } from "lucide-react";
import StatsCard from "../../components/statsCard";
import Table from "../../components/table";
import Pagination from "../../components/pagination";
import ShipmentFiltration from "./shipment-filtration";
import { shipmentColumns } from "./columns";
import { buildStatsCards } from "../../helper/constant";
import useDebouncedValue from "../../hooks/useDebouncedValue";
import { useGetShipmentsQuery } from "../../store/shippingApi";

const Dashboard = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const debouncedSearch = useDebouncedValue(search.trim(), 400);
  const query = debouncedSearch || status;

  const { data, isFetching, isError, refetch } = useGetShipmentsQuery({
    page,
    pageSize,
    q: query,
  });

  const statsCards = buildStatsCards(data?.stats);

  const handleSearch = (value) => {
    setSearch(value);
    setStatus("");
    setPage(1);
  };

  const handleStatus = (value) => {
    setStatus(value);
    setSearch("");
    setPage(1);
  };

  const handlePageSize = (value) => {
    setPageSize(value);
    setPage(1);
  };

  return (
    <div className="flex flex-col gap-3 md:gap-4 lg:gap-5">
      <div className="grid grid-cols-2 gap-2 md:gap-3 lg:grid-cols-4">
        {statsCards.map((card) => (
          <StatsCard
            key={card.title}
            title={card.title}
            value={card.value}
            icon={card.icon}
            isLoading={isFetching && !data}
          />
        ))}
      </div>

      <div className="p-3 bg-white border border-gray-100 shadow-sm rounded-xl lg:rounded-2xl lg:p-4">
        <ShipmentFiltration
          search={search}
          onSearchChange={handleSearch}
          status={status}
          onStatusChange={handleStatus}
        />

        {isError ? (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-gray-500">
            <AlertTriangle size={32} className="text-red-400" />
            <p className="text-sm">Could not load shipments.</p>
            <button
              onClick={refetch}
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
            >
              Try again
            </button>
          </div>
        ) : (
          <>
            <Table
              columns={shipmentColumns}
              rows={data?.rows ?? []}
              isLoading={isFetching}
              skeletonRows={pageSize > 12 ? 12 : pageSize}
            />
            <Pagination
              page={data?.page ?? page}
              pageSize={data?.pageSize ?? pageSize}
              total={data?.total ?? 0}
              totalPages={data?.totalPages ?? 0}
              onPageChange={setPage}
              onPageSizeChange={handlePageSize}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
