import StatusBadge from "../../components/statusBadge";
import { formatDate, formatStatusLabel, formatWeight } from "../../helper/format";

export const shipmentColumns = [
  { header: "Shipping ID", accessorKey: "shipping_id" },
  { header: "Company", accessorKey: "company_name" },
  {
    header: "Product Category",
    accessorKey: "product_category",
    cell: ({ value }) => formatStatusLabel(value),
  },
  {
    header: "Weight",
    accessorKey: "weight",
    cell: ({ value }) => formatWeight(value),
  },
  { header: "Route", accessorKey: "route" },
  {
    header: "Date",
    accessorKey: "date",
    cell: ({ value }) => formatDate(value),
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ value }) => <StatusBadge status={value} />,
  },
];
