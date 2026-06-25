const useShipmentRecord = () => {
  const StatusCell = ({ status }) => {
    const statusStyles = {
      pending: "bg-yellow-50 text-yellow-600",
      "on delivery": "bg-blue-50 text-blue-600",
      completed: "bg-green-50 text-green-600",
      cancelled: "bg-red-50 text-red-600",
    };

    return (
      <span
        className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${
          statusStyles[status.toLowerCase()] || "bg-gray-50 text-gray-600"
        }`}
      >
        {status}
      </span>
    );
  };

  const WeightCell = ({ weight }) => {
    const formattedWeight = `${Math.round(weight).toLocaleString()} kg`;

    return <span>{formattedWeight}</span>;
  };
  const columns = [
    {
      header: "Shipment ID",
      accessorKey: "shipping_id",
    },
    {
      header: "Company",
      accessorKey: "company_name",
    },
    {
      header: "Product Category",
      accessorKey: "product_category",
    },
    {
      header: "Weight",
      accessorKey: "weight",
      cell: ({ getValue }) => <WeightCell weight={getValue()} />,
    },
    {
      header: "Route",
      accessorKey: "route",
    },
    {
      header: "Date",
      accessorKey: "date",
    },
    {
      header: "Status",
      accessorKey: "status",
      cell: ({ getValue }) => <StatusCell status={getValue()} />,
    },
  ];
  const rows = [
    {
      shipping_id: "SHP-002020",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2627.2,
      route: "New York → Chicago",
      date: "2024-11-08",
      status: "cancelled",
    },
    {
      shipping_id: "SHP-002040",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2653.2,
      route: "New York → Chicago",
      date: "2024-10-19",
      status: "pending",
    },
    {
      shipping_id: "SHP-002060",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2679.2,
      route: "New York → Chicago",
      date: "2024-09-29",
      status: "cancelled",
    },
    {
      shipping_id: "SHP-002080",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2705.2,
      route: "New York → Chicago",
      date: "2024-09-09",
      status: "pending",
    },
    {
      shipping_id: "SHP-002100",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2731.2,
      route: "New York → Chicago",
      date: "2024-08-20",
      status: "cancelled",
    },
    {
      shipping_id: "SHP-002120",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2757.2,
      route: "New York → Chicago",
      date: "2024-07-31",
      status: "pending",
    },
    {
      shipping_id: "SHP-002140",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2783.2,
      route: "New York → Chicago",
      date: "2024-07-11",
      status: "cancelled",
    },
    {
      shipping_id: "SHP-002160",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2809.2,
      route: "New York → Chicago",
      date: "2024-06-21",
      status: "pending",
    },
    {
      shipping_id: "SHP-002180",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2835.2,
      route: "New York → Chicago",
      date: "2024-06-01",
      status: "cancelled",
    },
    {
      shipping_id: "SHP-002200",
      company_name: "Atlas Freight Co",
      product_category: "electronics",
      weight: 2861.2,
      route: "New York → Chicago",
      date: "2026-05-12",
      status: "pending",
    },
  ];

  return { columns, rows };
};

export default useShipmentRecord;
