export const formatNumber = (value) =>
  typeof value === "number" ? value.toLocaleString("en-US") : value ?? "—";

export const formatWeight = (weight) =>
  weight == null ? "—" : `${Number(weight).toLocaleString("en-US")} kg`;

export const formatDate = (value) => {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatStatusLabel = (status) =>
  status
    ? status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
    : "—";

const statusStyles = {
  in_transit: "bg-blue-50 text-blue-600",
  out_for_delivery: "bg-indigo-50 text-indigo-600",
  delivered: "bg-green-50 text-green-600",
  completed: "bg-emerald-50 text-emerald-600",
  pending: "bg-yellow-50 text-yellow-600",
  delayed: "bg-orange-50 text-orange-600",
  customs_hold: "bg-purple-50 text-purple-600",
  returned: "bg-gray-100 text-gray-600",
  cancelled: "bg-red-50 text-red-600",
};

export const statusBadgeClass = (status) =>
  statusStyles[status] || "bg-gray-50 text-gray-600";
